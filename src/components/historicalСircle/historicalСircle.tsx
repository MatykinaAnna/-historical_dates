import style from './style.module.scss'
import * as d3 from 'd3';
import { historyEvent } from '../../shared/interface';
import classNames from 'classnames';

import btn from '../../shared/icons/btn.png'

import {
    useEffect,
    useRef,
    useState
}
from 'react';
import NumberTsx from '../number/number';

const HistoricalСircle = (props: {
            height: number,
            width: number,
            cx: number,
            cy: number,
            r: number,

            historyEvents: historyEvent[]
        }) => {

    const svgRef = useRef(null);
    const svgWrapperCircle = useRef(null);

    const [dataHistoryEvents, setDataHistoryEvents] = useState(props.historyEvents)
    const [activeHisEv, setActiveHisEv] = useState(0)

    const [yearStart0, setYearStart0] = useState(dataHistoryEvents[0].yearStart)
    const [yearStart1, setYearStart1] = useState(dataHistoryEvents[0].yearStart)
    const [yearEnd0, setYearEnd0] = useState(dataHistoryEvents[0].yearEnd)
    const [yearEnd1, setYearEnd1] = useState(dataHistoryEvents[0].yearEnd)

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const width = +svg.attr('width');
        const height = +svg.attr('height');

        if (document.getElementsByClassName('isCircle').length == 0){
            svg.attr("height", height)
            .attr("width", width);       
                
            svg.append("circle") 
                    .attr("cx", props.cx)
                    .attr("cy", props.cy)
                    .attr("r", props.r)
                    .style("stroke", '#d5d7da')
                    .style("fill", "none");
        }
        
    }, [dataHistoryEvents]);

    useEffect(()=>{

        const svg = d3.select(svgRef.current);
        let corner = 270 / props.historyEvents.length        
        let corner1 = -0.8

        let x = props.cx + props.r * Math.cos(corner1)
        let y = props.cy + props.r * Math.sin(corner1)

        let color = 'gray'

        if (document.getElementsByClassName('isCircle').length == 0){

            setYearStart0(yearStart1)
            setYearStart1(dataHistoryEvents[0].yearStart)

            setYearEnd0(yearEnd1)
            setYearEnd1(dataHistoryEvents[0].yearEnd)

            svg.append("circle") 
                .attr("cx", x)
                .attr("cy", y)
                .attr("r", 20)
                .style("stroke", 'gray')
                .style("fill", 'white')
                .classed('isCircle', true)
                        
            svg.append("text")
                .text(`${activeHisEv+1}`)
                .attr("x", x-4)
                .attr("y", y+5)
                .classed('isText', true)

            svg.append("text")
                .text(`${dataHistoryEvents[activeHisEv].name}`)
                .attr("x", x+40)
                .attr("y", y+5)
                .classed('isTextName', true)    

            corner1 = corner1 + corner    

            for (let i=activeHisEv+1; i< dataHistoryEvents.length; i++){
                x = props.cx + props.r * Math.cos(corner1)
                y = props.cy + props.r * Math.sin(corner1)
                svg.append("circle") 
                        .attr("cx", x)
                        .attr("cy", y)
                        .attr("r", 2)
                        .style("stroke", 'gray')
                        .style("fill", color)
                        .classed(`pount point${i}`, true)
                        .on("click", (event) => clickPoint(event))
                        .on("mouseover", (event) => mouseoverPoint(event))
                        .on("mouseout", (event) => mouseoutPoint(event))
                corner1 = corner1 + corner    
            } 
            for (let i=0; i< activeHisEv; i++){
                x = props.cx + props.r * Math.cos(corner1)
                y = props.cy + props.r * Math.sin(corner1)

                svg.append("circle") 
                        .attr("cx", x)
                        .attr("cy", y)
                        .attr("r", 2)
                        .style("stroke", 'gray')
                        .style("fill", color)
                        .classed(`pount point${i}`, true)
                        .on("click", (event) => clickPoint(event))
                        .on("mouseover", (event) => mouseoverPoint(event))
                        .on("mouseout", (event) => mouseoutPoint(event))
                corner1 = corner1 + corner    
            }

        }
        

    }, [dataHistoryEvents])

    function mouseoverPoint(event: Event){
        let target = event.target
        //@ts-ignore
        let className =  target.classList[1]
        const svgd3 = d3.select(svgRef.current)
        //@ts-ignore
        let x = target.cx.animVal.value
        //@ts-ignore
        let y = target.cy.animVal.value
        svgd3.selectChild(`.${className}`)
            .transition()
                .attr("r", 20)
                .style("fill", 'white')

        // setTimeout(()=>{
        //     svgd3.append("text")
        //         .classed('isTextTemporal', true)
        //         .text(`${Number(className.split('point')[1])+1}`)
        //         .attr("x", x-4)
        //         .attr("y", y+5)
        // }, 500)        
                
    }

    function mouseoutPoint(event: Event){
        let target = event.target
        //@ts-ignore
        let className =  target.classList[1]
        const svgd3 = d3.select(svgRef.current)
        svgd3.selectChild(`.${className}`)
            .transition()
                .attr("r", 2)
                .style("fill", 'grey')
        svgd3.selectChild(`.isTextTemporal`)
            .remove()
    }

    function clickPoint(event: Event){
        let classes = ''
        //@ts-ignore
        classes = event.target.className.baseVal
        let num = Number(classes.split(' ')[1].split('point')[1])

        setActiveHisEv(num)

        const svg = svgRef.current;
        const corner = 360 / props.historyEvents.length * (activeHisEv - num)
        //@ts-ignore
        svg.style.transform = `rotate(${corner}deg)`

        document.getElementsByClassName('isText')[0].remove()
        document.getElementsByClassName('isTextName')[0].remove()
        const svgd3 = d3.select(svgRef.current);
        svgd3.selectChild('.isCircle')
            .transition()
                .attr("r", 2)
                .style("fill", 'gray') 
        //@ts-ignore
        svg.style.transition = 'transform 1s'

        setTimeout(()=>{
            //@ts-ignore
            svg.innerHTML = ''
            //@ts-ignore
            svg.style.transform = `rotate(0deg)`
            //@ts-ignore
            svg.style.transition = 'transform 0s'
            let array = []
            for (let i=num; i<dataHistoryEvents.length; i++){
                array.push(dataHistoryEvents[i])
            }
            for (let i=0; i<num; i++){
                array.push(dataHistoryEvents[i])
            }
            setDataHistoryEvents(array)
        }, 1000)

    }

    function toBack(){
        if (activeHisEv > 0 && document.getElementsByClassName('isText')[0]){
            setActiveHisEv(activeHisEv-1)
            const svg = svgRef.current;
            const corner = 360 / props.historyEvents.length
            //@ts-ignore
            svg.style.transform = `rotate(${corner}deg)`
            
            document.getElementsByClassName('isText')[0].remove()
            document.getElementsByClassName('isTextName')[0].remove()
            const svgd3 = d3.select(svgRef.current);
            svgd3.selectChild('.isCircle')
                .transition()
                    .attr("r", 2)
                    .style("fill", 'gray') 
            //@ts-ignore
            svg.style.transition = 'transform 1s'
            setTimeout(()=>{
                //@ts-ignore
                svg.innerHTML = ''
                //@ts-ignore
                svg.style.transform = `rotate(0deg)`
                //@ts-ignore
                svg.style.transition = 'transform 0s'
                let array = []
                for (let i=activeHisEv-1; i<dataHistoryEvents.length; i++){
                    array.push(dataHistoryEvents[i])
                }
                for (let i=0; i<activeHisEv-1; i++){
                    array.push(dataHistoryEvents[i])
                }
                setDataHistoryEvents(array)
            }, 1000)
        }
    }

    function toForward(){
        if (activeHisEv < dataHistoryEvents.length-1 && document.getElementsByClassName('isText')[0]){
            setActiveHisEv(activeHisEv+1)
            const svg = svgRef.current;
            const corner = 360 / props.historyEvents.length
            //@ts-ignore
            svg.style.transform = `rotate(${-corner}deg)`
            document.getElementsByClassName('isText')[0].remove()
            document.getElementsByClassName('isTextName')[0].remove()
            

            const svgd3 = d3.select(svgRef.current);
            svgd3.selectChild('.isCircle')
            .transition()
                .attr("r", 2)
                .style("fill", 'gray')          

            //@ts-ignore
            svg.style.transition = 'transform 1s'
            setTimeout(()=>{
                //@ts-ignore
                svg.innerHTML = ''
                //@ts-ignore
                svg.style.transform = `rotate(0deg)`
                //@ts-ignore
                svg.style.transition = 'transform 0s'
                let array = []
                for (let i=activeHisEv+1; i<dataHistoryEvents.length; i++){
                    array.push(dataHistoryEvents[i])
                }
                for (let i=0; i<activeHisEv+1; i++){
                    array.push(dataHistoryEvents[i])
                }
                setDataHistoryEvents(array)
            }, 1000)
        }
    }
    
    return (
        <div className={style.wrapper}>
            <div className={style.years}>
                <div className={style.yearStart}><NumberTsx {...{start:Number(yearStart0) , end: Number(yearStart1)}} /></div>
                <div className={style.yearStart}><NumberTsx {...{start:Number(yearEnd0) , end: Number(yearEnd1)}} /></div>
            </div>
            <div className={style.wrapperCircle}>
                <svg ref = {svgRef} className={style.wrapperCircle} width = {String(props.width)} height = {String(props.height)}> </svg>
            </div>
            <div className={style.wrapperButtons}>
                <div className={style.divButtons}>
                    <div>{activeHisEv+1}/{dataHistoryEvents.length}</div>
                    <div>
                        <img src={btn} onClick={toBack} className={style.btnBack} alt="btnBack" />
                        <img src={btn} onClick={toForward} className={style.btnForward} alt="btnBack" />
                    </div>
                </div>
                
            </div>            
        </div>
        
    )
}

export default HistoricalСircle
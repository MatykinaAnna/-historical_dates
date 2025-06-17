import style from './style.module.scss'
import * as d3 from 'd3';
import { historyEvent } from '../../shared/interface';
import {
    useEffect,
    useRef,
    useState
}
from 'react';

const HistoricalСircle = (props: {
            height: number,
            width: number,
            cx: number,
            cy: number,
            r: number,

            historyEvents: historyEvent[]
        }) => {

    const svgRef = useRef(null);

    const [dataHistoryEvents, setDataHistoryEvents] = useState(props.historyEvents)

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const width = +svg.attr('width');
        const height = +svg.attr('height');
        
        svg.attr("height", height)
            .attr("width", width);       
                
        svg.append("circle") 
                .attr("cx", props.cx)
                .attr("cy", props.cy)
                .attr("r", props.r)
                .style("stroke", '#d5d7da')
                .style("fill", "none");

    }, []);

    useEffect(()=>{

        const svg = d3.select(svgRef.current);
        let corner = 270 / props.historyEvents.length        
        let corner1 = 0

        for (let i=0; i< props.historyEvents.length; i++){
            
            
            let x = props.cx + props.r * Math.cos(corner1)
            let y = props.cy + props.r * Math.sin(corner1)

            let color = 'gray'

            svg.append("circle") 
                .attr("cx", x)
                .attr("cy", y)
                .attr("r", 2)
                .style("stroke", 'gray')
                .style("fill", color);

            corner1 = corner1 + corner    
        }        

    }, [dataHistoryEvents])
    
    return (
        <div className={style.wrapper}>
            <div className={style.wrapperCircle}>
                <svg ref = {svgRef} width = {String(props.width)} height = {String(props.height)}> </svg>
            </div>
        </div>
        
    )
}

export default HistoricalСircle
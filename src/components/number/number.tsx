import { useEffect, useRef, useState } from 'react';

const NumberTsx = (props: {
    start: number,
    end: number,
    id: string
}) => {

    useEffect(()=>{
        console.log(props.start, props.end)
        let step = 1
        if (props.start > props.end){
            step = step * (-1)
        }
            var i = props.start
            let timerId = setInterval(() => {
                //@ts-ignore
                document.getElementById(`${props.id}`).innerHTML = String(i)
                i = i + step;
    
                if (i>props.end && step>0){
                    clearInterval(timerId);
                } else if (i<props.end && step<0){
                    clearInterval(timerId);
                }
            }, 30);
        
    }, [])

    return (
        <div >
            <div id={`${props.id}`}>
                
            </div>
        </div>
    )
}

export default NumberTsx
import { useEffect, useRef, useState } from 'react';

const NumberTsx = (props: {
    start: number,
    end: number,
    id: string
}) => {

    useEffect(()=>{
            var i = props.start
            let timerId = setInterval(() => {
                //@ts-ignore
                document.getElementById(`${props.id}`).innerHTML = String(i)
                i = i + 1;
    
                if (i>props.end){
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
import { useEffect, useRef, useState } from 'react';

const NumberTsx = (props: {
    start: number,
    end: number
}) => {

    const numRef = useRef(null);

    useEffect(()=>{
        var i = props.start
        let timerId = setInterval(() => {
            console.log(i)
            //@ts-ignore
            numRef.current.innerHTML = String(i)
            i = i + 1;

            if (i>props.end){
                clearInterval(timerId);
            }
        }, 30);
    }, [])

    return (
        <div >
            <div ref={numRef}>
                
            </div>
        </div>
    )
}

export default NumberTsx
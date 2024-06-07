import React, { useState, useEffect } from 'react';

const WindowResize = () =>{
    const [windowSize, setWindowSize] = useState({
        width : window.innerWidth,
        height : window.innerHeight
    })

    useEffect(()=>{
        const handleResize = () =>{
            setWindowSize({
                width : window.innerWidth,
                height : window.innerHeight
            })
        }

        window.addEventListener('resize',handleResize);

        return () =>{
            window.removeEventListener('resize',handleResize);
        }
    },[])

    return (
        <div>
            <h1>Window Size : {windowSize.width} X {windowSize.height}</h1>
        </div>
    );
}

export default WindowResize;
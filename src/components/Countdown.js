import React, { useState, useEffect } from 'react';

const Countdown = ({init}) =>{
    const [timeRemaining,setTimeRemaining] = useState(init);

    useEffect(() =>{
        if (timeRemaining <= 0) return;

        const timerID = setInterval(()=>{
            setTimeRemaining(prev => prev - 1);
        },1000)

        return () => {
            clearInterval(timerID);
        }
    },[timeRemaining])

    return (
        <div>
          {timeRemaining > 0 ? (
            <p>Time Remaining: {timeRemaining}</p>
          ) : (
            <p>Time's up!</p>
          )}
        </div>
      );
}

export default Countdown;


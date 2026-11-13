import React, { useEffect, useState } from 'react'

function Timer() {
    const [time, setTime] = useState(new Date());

    useEffect(() =>{
        const interval =
         setInterval(()=>{
            setTime(new Date())
            console.log("time is updated");

        },1000)

        return ()=>{
            clearInterval(interval)
            console.log("interval is cleared")
        }
    })


  return (
    <div>Timer


        <h3>{time.toLocaleDateString()}</h3>
    </div>
  )
}

export default Timer
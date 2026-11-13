import React, { useState } from 'react'
import Time from './Timer'
function UseEffectClock() {
    const [displayTimer, setDisplayTimer] = useState(true)

    return (
        <div>
            {displayTimer ? <Time /> : null}
            <button onClick={()=> setDisplayTimer(!displayTimer)}>toggle</button>
            {/* <button onClick={()=> setDisplayTimer(!displayTimer)}>{displayTimer ? "Hide": "show"}</button> */}


        </div>
    )
}

export default UseEffectClock;
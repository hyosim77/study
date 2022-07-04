import React, { useState, useEffect } from 'react'

function Counter () {
    const [number, setNumger] = useState(0)

    const onIncrease = () => {
        setNumger(prevnumber => prevnumber + 1)
    }
    const onDecrease = () => {
        setNumger(prevnumber => prevnumber - 1)
    }
    
    // Life Cycle : Created -> (Upcated -> Mounted)반복 -> unmounted
    // useEffect(함수를 리턴하는 함수, Deps) :Deps가 바뀌면, updated 시점에서 함수를 실행한다.)
    useEffect(() => { return () => { alert('creased') } }, [])
    useEffect(() => { return () => { alert('updated') } }, [number])
    return (
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    )
}

export default Counter

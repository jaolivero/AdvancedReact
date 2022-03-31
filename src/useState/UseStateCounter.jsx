import React, { useState } from 'react'

const UseStateCounter = () => {
    const[value, setValue] = useState(0);
    const reset = () => {
        setValue(0);
    }
    const complexIncrease = () => {
        setTimeout(() =>{
            setTimeout(() => {
                //setValue(value + 1);
                setValue((prevState) => {
                    return prevState + 1;
                })
            })
        }, 2000);
    }
  return (
  <>
      <section>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button onClick={() => setValue(value - 1) }>decrease</button>
        <button onClick={reset}>reset</button>
        <button onClick={() => setValue(value + 1)}>increase</button>
      </section>
       <section>
        <h2>Complex Counter</h2>
        <h1>{value}</h1>
        <button onClick={() => setValue(value - 1) }>decrease</button>
        <button onClick={reset}>reset</button>
        <button onClick={complexIncrease}>increase</button>
      </section>
  </>
  )
}
export default UseStateCounter;

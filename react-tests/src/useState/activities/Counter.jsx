import React, {useState} from 'react'

function Counter() {

    let [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
        
    }

    const decrement = () => {
        setCount(count - 1);
        
    }

    const reset = () => {
        setCount(0);
        
    }

    if(count == 20 || count == -20){
        return (
            <>
                <p>limit reached</p>
                <button onClick={() => reset()}>reset</button>
            </>
        );
        
       

    }

  return (
    <>
        <h3>Counter: {count}</h3><br />
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>Decrement</button>
        <button onClick={() => reset()}>Reset</button>
    </>
  )
}

export default Counter
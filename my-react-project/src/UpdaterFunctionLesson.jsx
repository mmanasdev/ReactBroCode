/*
updater function = A function passed as an argument to setState() usually.
ex. setYear(arrow function).
Allow for sefe updates based on the previous state.
Used with multiple state updates and asynchronous functions.
Good practice to use updater function.
*/

import React, { useState } from 'react';

function UpdaterFunctionLesson() {
    const [count, setCount] = useState(0);

    function increment() {
        /*
        Uses the CURRENT state to calculate the NEXT state.
        set functions do not trigger an update immediately.
        React batches multiple set functions and updates the state in a single render.
        NEXT state is calculated based on the CURRENT state.

        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);

        React batches the updates and updates the state once.
        Count: +1
        */
        // setCount(count + 1);

        //Uses the PENDING state to calculate the NEXT state.
        setCount((prevCount) => prevCount + 1);
    }

    function decrement() {
        // setCount(count - 1);
        setCount((prevCount) => prevCount - 1);
    }

    function reset() {
        setCount(0);
    }

    return <div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>Decrement</button>
    </div>;
} export default UpdaterFunctionLesson;
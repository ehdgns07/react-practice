import React, { useState } from "react";

function UseState3(){

    const [number, setNumber] = useState(0);

    const plus = () => {
        setNumber(number+1);
    }

    const minus = () => {
        setNumber(number-1);
    }

    return (
        <div>
            <div>{number}</div>
            <button onClick={plus}>+1</button>
            <button onClick={minus}>-1</button>
        </div>
    );
}

export default UseState3
import React, { useState } from "react";

function UseState(){

    const [number, setNumber] = useState(0);
    const onClickHandler = ()=>{
        setNumber(number+1);
    }

    const init = ()=>{
        if(number >= 24){
            setNumber(1);
        }
    }

    return (
        <div>
            <span>Number : {number}</span>
            <button onClick={() => {
            onClickHandler();

            init();
        }


        }>Click</button>
        </div>
    )
}

function outer(){
    let x = 0;
    function inner(){
        console.log(x); //0
    }
}

//react
// let _value;
// useState(initialValue){
//     if(_value === undefined){
//         _value = initialValue;
//     }
//     const setState = (newValue)=>{
//         _value = newValue;
//     }
//     return [_value, setState()]
// }


export default UseState
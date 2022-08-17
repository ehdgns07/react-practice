import React, {useEffect, useState} from "react";

function UseEffect() {

    const [number, setNumber] = useState(0);
    const [text, setText] = useState("");

    const updateNumber = () => {
        setNumber(number + 1);
    }

    useEffect(() =>{
        console.log("useEffect");
    },[])

    //
        useEffect(() =>{
            console.log("number 변경 체크");
        },[number])

    useEffect(() =>{
        console.log("text 변경 체크");
    },[text])

    useEffect(() =>{
        console.log("text,number 변경 체크");
    },[text,number])

    const inputValueChange = (e)=>{
        setText(e.target.value);
    }


    return (
        <div>
          <div>
              <button onClick={updateNumber}>+1</button>
              <span>Current Number {number}</span>
          </div>
        <div>
            <input type={"text"} onChange={inputValueChange}/>
            <div>{text}</div>
        </div>
        </div>
    );
}


export default UseEffect
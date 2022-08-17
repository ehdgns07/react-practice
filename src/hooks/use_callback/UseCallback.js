import React, {useCallback, useEffect, useState} from "react";

function UseCallback(){

    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);

    // const showNumber = function (){
    //     console.log(`Show Number : ${number}`);
    // }

    // const showNumber = useCallback(()=>{
    //     console.log(`Show Number : ${number}`);
    // },[])

    const test = ()=>{
        console.log("test");
    }

    const showNumber = useCallback(()=>{
        console.log(`Show Number : ${number}`);
        console.log(`Show Number2 : ${number2}`);
    },[number])

    useEffect(()=>{
        console.log(`변경 상태 확인`);
    },[test])

    // useEffect(()=>{
    //     console.log(`변경 상태 확인`);
    // },[showNumber])

    //useEffect에 showNumber를 추적하게 지정함
    //화살표로 숫자를 변경 시, showNumber 함수는 변경되지 않았음에도 useEffect가 계속 실행됨. 왜?
    //리랜더링 하는 과정에서 객체(함수)의 주소값이 재할당되기 때문에 상태가 변화된것으로 인정됨.
    //따라서 useEffect는 showNumber에 대해 변경이 있었다고 판단하여 실행.

    const [toggle, setToggle] = useState(true);

    return (
            <div>
                <div>
                <input type={"number"} onChange={(e)=>{ setNumber2(e.target.value) }}/><br/>
                </div>
                <button onClick={test}>Show Number</button><br/>
                <button onClick={()=> {setToggle(!toggle)}}>{toggle.toString()}</button>
            </div>
    );
}

export default UseCallback
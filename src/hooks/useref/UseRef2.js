import React, {useEffect, useRef} from "react";


function UseRef2(){

    const inputRef = useRef();

    useEffect(()=>{
        console.log(inputRef);
        inputRef.current.focus();
    },[])

    const showUsername = ()=> {
        alert(inputRef.current.value);
        //id 검증 로직(가정) -> 초기화

        inputRef.current.value = "";
        inputRef.current.focus();
    }

    return (
        <div>
            <input ref={inputRef} type={"text"} placeholder={"username"}></input>
            {/*<input type={"password"} placeholder={"pwd"}></input>*/}
            <input type={"submit"} onClick={showUsername} value={"login"}></input>
        </div>

    );
}


export default UseRef2
import React, {useState} from "react";

const fetchApi = () => {
    return ['권모','경욱']
}

function UseState2() {
    //초기값 지정하는 useState
    const [names, setNames] = useState(fetchApi());
    const [inputValue, setInputValue] = useState('');

    const onChangeHandler = (event)=>{
        setInputValue(event.target.value);
    }

    const onClickInputValueHandler = ()=>{
        if(inputValue === ''){
            return names;
        }
        // names.push(inputValue);
        // console.log(names);
        // setNames(()=>names.push(inputValue))
        //set함수 내부에는 이전의 상태값을 가져올 수 있는 변수가 있음
        // setNames((prevValue) => {
        //     return [...prevValue, inputValue];
        // })
        setNames(names.concat(inputValue));
    }

    return (
        <div>
            <input type={"text"} onChange={onChangeHandler}/>
            <button onClick={onClickInputValueHandler}>Click!</button>
            {names.map((name,index) => {
                return (
                    //input에 기입하는 데이터 트래킹

                    //1. 기존 데이터 출력
                    <p key={index}> {name} - {index} </p> );
            })}

        </div>
    );
}

export default UseState2
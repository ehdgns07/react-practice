import React, {useState, useRef, useEffect} from "react";

function UseRef() {
    console.log("랜더링!!!!!!!!!!!!!!!!!!")
    const [stateNumber, setStateNumber] = useState(0);
    const refNumber = useRef(0);
    let varNumber = 0;

    const updateStateNumber = () => {
        setStateNumber(stateNumber + 1);
    }

    const updateRefNumber = () => {
        refNumber.current += 1;
        console.log('refNumber : ' + refNumber.current)
    }

    const updateVarNumber = () => {
        varNumber += 1;
        console.log('varNumber: ' + varNumber);
    }

    //랜더링을 다시 하면 함수를 다시 실행시키기 때문에 내부 변수인 varNumber는 초기화 된다.
    //따라서 refNumber와는 다르게 랜더링 후에 값이 초기화 되므로 화면에 출력되지 않는다.
    const showNumbers = () => {
        console.log(`varnumber : ${varNumber} refNumber : ${refNumber.current}`)
    }


    return (
        <div>
            <div>
                <p>StateNumber : {stateNumber}</p>
                <button onClick={updateStateNumber}>StateNumber+1</button>
            </div>
            <div>
                {/*리액트 에서는 객체 자체를 출력하고자 할 때 에러 발생*/}
                <p>RefNumber : {refNumber.current}</p>
                <button onClick={updateRefNumber}>refNumber+1</button>
            </div>
              <div>
                <p>VarNumber : {varNumber}</p>
                <button onClick={updateVarNumber}>VarNumber+1</button>
            </div>
              <div>
                <button onClick={showNumbers}>show ref/var Number</button>
            </div>

        </div>
    );
};

export default UseRef;


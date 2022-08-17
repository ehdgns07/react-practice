import React, {useReducer, useState} from "react";

const ACTIONTYPES = {
    buy : 'buy',
    sell : 'sell'
}

const reducer = (state, action) => {
    console.log('---reducer 연결---');
    console.log(state);
    console.log(action);
    // 매수 : 초기 상태 + action.number
    if(action.type === ACTIONTYPES.buy) {
        return state + action.stock;
    }
    // 매도 : 초기 상태 - action.number
    else if(action.type === ACTIONTYPES.sell) {
        return state - action.stock;
    }else{
        // 방어 코드
        return state;
    }
}

function UseReducer(){
    const[ number, setNumber ] = useState(0);

    const [ balance, dispatch ] = useReducer(reducer, 0);

    return(
        <div>
            <h2>주식 거래</h2>
            <p>잔액 정보 : {balance}</p>
            <input
                type={"number"}
                onChange={(e)=> setNumber(Number(e.target.value))}
                step={1000}
                />
            <button onClick={()=> {
                dispatch({ type : ACTIONTYPES.buy, stock : number } )
                // dispatch({ type : 'bui', stock : number } )
            }}>매수</button>
            <button onClick={()=>{
                dispatch( { type : ACTIONTYPES.sell, stock : number } )
            }}>매도</button>
        </div>
    );
}

export default UseReducer
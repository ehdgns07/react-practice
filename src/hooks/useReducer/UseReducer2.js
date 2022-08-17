import React, {useReducer, useRef, useState} from "react";

const ACTIONTYPES = {
    add: 'add',
    delete: 'delete',
    update: 'update'
}

const reducer = (state, action) => {
    console.log('---reducer 연결---');
    console.log(state.lists);
    console.log(action.id.currentId.current);
    console.log(action.name.name);

    const newItem = {
        id : (action.id.currentId.current += 1),
        name : action.name.name
    }

    if (action.type === ACTIONTYPES.add) {
        state.count++;
        state.lists = [...state.lists, newItem];
        return {...state};
    }
    else if (action.type === ACTIONTYPES.delete) {
        return state - action.stock;
    } else {
        // 방어 코드
        return state;
    }
}

const initialList =
    {
        count: 1,
        lists: [
            {
                id: 1,
                name: 'ramen'
            }
        ]
    };

function UseReducer2() {
    const [name, setName] = useState('');

    const [finalList, dispatch] = useReducer(reducer, initialList);

    const currentId = useRef(1);

    return (
        <div>
            <h2>물품 리스트</h2>
            {process.env.REACT_APP_SERVICE_KEY}
            <p>총 물품 수 : {finalList.count}</p>
            <input
                type={"text"}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => {
                dispatch({type: ACTIONTYPES.add, id: {currentId}, name: {name}});
                // dispatch({ type : 'bui', stock : number } )
            }}>추가
            </button>
            <button onClick={() => {
                dispatch({type: ACTIONTYPES.delete})
            }}>삭제
            </button>

            {
                finalList.lists.map((list) => {

                    return (
                        <div key={list.id}>
                            <p>{list.id}</p>
                            <p>{list.name}</p>
                        </div>
                    );

                })}
        </div>
    );
}

export default UseReducer2
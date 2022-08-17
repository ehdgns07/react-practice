import React, {useState} from "react";

function Rendering(){
    const [isLogin, setIsLogin] = useState(false);

    //데이터가 담겼다고 가정
    let db = [
        {
            id : 1
        },
        {
            id : 2
        }

    ];

    let button;

    // if(isLogin){
    //     button = <button>logout</button>
    // }else{
    //     button = <button>login</button>
    // }

    return (
        <div>
            {/*조건부 랜더링*/}
            {/*true-thy? falsy?*/}
            {db.length === 0 ?
                ('null')
                :
                (db.map((data)=>{
                    return <p>{data.id}</p>
                }))
            }
            {/*3항 연산자*/}
            {isLogin ? <button>logout</button>:<button>login</button>}
        </div>
    );
}

export default Rendering

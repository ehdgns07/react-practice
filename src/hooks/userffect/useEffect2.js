import React, {useEffect} from "react";

function UseEffect2() {

    useEffect(() => {
        console.log("useEffect");
        const intervalWork = setInterval(()=>{
            console.log("intervalWork : 작업중");
        }, 1000)

        // clearInterval(intervalWork);
        //return은 컴포넌트가 언마운팅 될때 실행. 이벤트를 줘서 언마운팅 시키면 실행됨
        return ()=>{
            clearInterval(intervalWork);
        };

    },[])

    return (
        <div>
            <span>작업중 - 콘솔 확인</span>
        </div>
    );
}

export default UseEffect2
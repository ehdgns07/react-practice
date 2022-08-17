import React from "react";

class Notice extends React.Component {

    //생성자에 대한 부분
    constructor() {
        super();
        //컴포넌트 초기 상태 지정
        this.state = "컴포넌트의 상태와 생명 주기를 관리하는 함수 호출";
    }

    componentDidMount() {
        console.log("mounting state");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("updating state");
    }

    componentWillUnmount() {
        console.log("unmount state");
    }

    //클래스 사용시에는 반드시 render 사용해야 한다.
    render(){
        return (
            <div>
                <span>{this.state}</span>
            </div>
        );
    }


}

export default Notice
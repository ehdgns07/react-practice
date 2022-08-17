import React from "react";

function Comment({name, content}){

    // props는 read only. 새로운 값 할당이 불가능
    

    return (<div>
    <span>{name}</span>
    <span>---</span>
    <span>{content}</span> <br/>
    </div>);
}

export default Comment
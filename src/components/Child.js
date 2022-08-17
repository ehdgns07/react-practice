import React from "react";

function Child(props){
    return (
        <div>
            {props.name}<br/>
            <button onClick={()=>{props.setName("c-name")}}>c-btn</button>

        </div>
    )
}

export default Child
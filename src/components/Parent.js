import React, {useState} from "react";
import Child from "./Child";

function Parent(){
    const [lastName, setLastName] = useState('it')

    console.log(lastName);

    return (
        <div>
            <button onClick={()=>{setLastName('p-name')}}>p-btn</button>
        <Child name={lastName} setName={setLastName}></Child>
        </div>
    )
}

export default Parent
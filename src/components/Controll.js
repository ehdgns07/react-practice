import React, {useState} from "react";

function Controll(){
    const [name, setName] = useState('');

    const handleChange = (e)=>{
        setName(e.target.value);

    }

    const handleSubmit = (e)=>{
        alert(name);
        e.preventDefault();
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>
                name:
                <input type={"text"} value={name} onChange={handleChange}/>
            </label>
            <button type={"submit"}>submit</button>
        </form>
    );
}
export default Controll
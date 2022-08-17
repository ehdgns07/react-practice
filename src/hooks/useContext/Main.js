import React, {useContext} from 'react'
import {ThemeContext} from "../../contexts/ThemeContext";

function Main(){
    const themeData = useContext(ThemeContext);

    return (
        <main style={{backgroundColor : themeData.isDark ? "black" : "white", color : themeData.isDark ? "white":"black"}}>
            <p>Context Main</p>
        </main>

    );
}

export default Main
import React, {useContext} from 'react'
import {ThemeContext} from "../../contexts/ThemeContext";

function Header(){

    const themeData = useContext(ThemeContext);

    return (
        // <header style={{backgroundColor : isDark? "black":"lightgray", color : isDark? "white":"black"}}>
        <header style={{backgroundColor : themeData.isDark? "black":"lightgray", color : themeData.isDark? "white":"black"}}>
            <h1>Context Header</h1>
        </header>
    );
}

export default Header
import React, {useContext} from 'react'
import {ThemeContext} from "../../contexts/ThemeContext";

// function Footer({isDark, setIsDark}){
function Footer(){

    const themeData = useContext(ThemeContext);

    const changeTheme = ()=>{
        themeData.setIsDark(!themeData.isDark);
    }

    return (
        // <footer style={{backgroundColor : isDark ? 'black':"lightgray", color : isDark ? 'white' : "black"}}>
        <footer style={{backgroundColor : themeData.isDark ? 'black':"lightgray", color : themeData.isDark ? 'white' : "black"}}>
          <button
            onClick={changeTheme}
          >Mode</button>
        </footer>

    );
}

export default Footer
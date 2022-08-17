import React, {useContext} from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import {ThemeContext} from "../../contexts/ThemeContext";

//ver1
// function Page({isDark, setIsDark}) {
function Page() {

    //ver2
    // const themeData = useContext(ThemeContext);

    return (
        <div>
            {/*ver1*/}
            {/*<Header isDark={isDark}></Header>*/}
            {/*<Main isDark={isDark}></Main>*/}
            {/*<Footer isDark={isDark} setIsDark={setIsDark}></Footer>*/}

            {/*ver2*/}
            {/*<Header isDark={themeData.isDark}></Header>*/}
            {/*<Main isDark={themeData.isDark}></Main>*/}
            {/*<Footer isDark={themeData.isDark} setIsDark={themeData.setIsDark}></Footer> */}

            {/*ver3*/}
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
}

export default Page

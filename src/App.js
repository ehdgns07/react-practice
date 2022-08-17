import logo from './logo.svg';
import './App.css';
import {useState} from "react";
//3. 가져와서 사용할 모듈화된 컴포넌트를 import
import Hello from './Hello';
import Watch from './components/Watch';
import Library from "./components/Library";
import Comments from "./components/Comments";
import Notice from "./components/Notice"
import UseState from "./hooks/usestate/UseState";
import UseState2 from "./hooks/usestate/UseState2";
import UseState3 from "./hooks/usestate/UseState3";
import UseEffect from "./hooks/userffect/UseEffect";
import UseEffect2 from "./hooks/userffect/useEffect2";
import useState3 from "./hooks/usestate/UseState3";
import UseRef from "./hooks/useref/UseRef";
import UseRef2 from "./hooks/useref/UseRef2";
import UseMemo from "./hooks/usememo/UseMemo";
import UseCallback from "./hooks/use_callback/UseCallback";
import View from "./components/View";
import Rendering from "./components/Rendering";
import Controll from "./components/Controll";
import Parent from "./components/Parent";
import Child from "./components/Child";
import Page from "./hooks/useContext/Page";

function App() {

    const color ={
        color : "red",
        background : "black"
    }

    //변수 사용
    // const name = "it";
    const name = ["it", "dev", "friend"];
    const content = ["열공해라", "잘 할거다", "놀자"];
    const [showWork,setShowWork] = useState(false);


  return (
    // <div className="App">
    //   {/* <header className="App-header">
    //   <h1>Hello React</h1>
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
    //   {/*4. 컴포넌트 사용 */}
    //   <Hello></Hello>
    // </div>

      //step_02
      //empty fragment(<></>)
      <div style={color} className="hello">
      {/*<Hello class="hello"></Hello>*/}
      {/*   컴포넌트 사이에 변수, text 넣는건 의미가 없다. */}
      {/*<Hello>{name}</Hello>*/}
          {/*<div>{name}</div>*/}
      {/*<Hello></Hello>*/}
      </div>,
    // <Watch></Watch>

      //리액트 컴포넌트와 props
    // <div>
    //   <Library bookName={"React 실습"} bookPrice={15000}></Library>
    //   <Library bookName={"React 실습2"} bookPrice={20000}></Library>
    //   <Library bookName={"React 실습3"} bookPrice={25000}></Library>
    // </div>

    // ver 2
    <div>
      {/*  도서관  */}
      {/*<Library></Library>*/}
    {/*    comments    */}
    {/*<Comments name={name} content={content}></Comments>*/}
    {/*<Notice></Notice>*/}

        {/*Hooks*/}
        {/*UseState*/}
    {/*<UseState/>*/}
    {/*<UseState2/>*/}
    {/*    <UseState3></UseState3>*/}
    {/*    { showWork && <UseEffect2></UseEffect2> }*/}
    {/*    <button onClick={()=>setShowWork(!showWork)}>Click!</button>*/}
    {/*    <UseRef></UseRef>*/}
    {/*    <UseRef2></UseRef2>*/}
    {/*    <UseMemo></UseMemo>*/}
    {/*    <UseCallback></UseCallback>*/}
    {/*    <View>*/}
    {/*        <Hello/>*/}
    {/*        <Hello/>*/}
    {/*        <Hello/>*/}
    {/*    </View>*/}
    {/*    <Rendering></Rendering>*/}
    {/*    <Controll></Controll>*/}
    {/*    <Parent>*/}
    {/*        <Child/>*/}
    {/*    </Parent>*/}
        <Page/>
     </div>

  );
}

export default App;
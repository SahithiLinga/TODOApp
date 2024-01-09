import "./styles.css";
import Header from "./Header/Header.js";
import Count from "./Count/Count.js";
import SubHeader from "./Header/SubHeader/SubHeader.js";
import { useState } from "react";
import { setTextRange } from "typescript";

export default function App() {
  let [countList,setcountList]=useState([
    { id: 0, value: "Read SpringBoot",done:false },
    { id: 1, value: "Complete assignments" ,done:false},
    { id: 2, value: "Prepare breakfast",done:false },
    { id: 3, value: "Sleep for 2 hours",done:false },
    {id : 4, value: "Take a shower",done:false}
  ]);

  //function handleClick(){
    //setcountList([{id:99999,value:"Nothing to do Buddy! Sleep"}]);}

  const removeCompleted = () => {
    setcountList((prevTasks) => prevTasks.filter((num) => !num.done));
  };

  const toggleDone=(countid)=>{
    setcountList((prevtask)=>
    prevtask.map((num)=>
    num.id === countid ? {...num, done: !num.done}:num)
    );
  };

   let listItems = countList.map((num) => (
        <li key={num.id} className={num.done?'done':''} onClick={()=>toggleDone(num.id)} style={{ cursor: 'pointer' }} >
        <p>{num.value}</p>
      </li>
    ));
  
      return ( 
      <div className="Application">
        <Header />  
        <hr />
        <ul>{listItems}</ul>
        <div className="button">
        <button onClick={removeCompleted} id="button">Remove Completed</button> 
        </div>
      </div>
    );
  }
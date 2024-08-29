import { useState } from "react";
import "./App.css"

const App =()=>{

  const [number,setNumber]= useState("")
  const onValue =(event)=>{
    setNumber(event + number)
   }
const handleclick=()=>{
  setNumber(eval(number).toString())
  }

  const clear=()=>{
    setNumber("")
  }


  return(
    <div class="body">
      <h1 className="heading"  >CALCULATOR</h1>

      <div class="search_bar_div">
      <input type="text" placeholder="0" class="box" value={number}onChange={onValue}/>
      <button className="btn" onClick={clear}>C</button>
      </div>
      <div class="secnd_row">
        <button onClick={()=>onValue("7")}>7</button>
        <button  onClick={()=>onValue("8")}>8</button>
        <button  onClick={()=>onValue("9")}>9</button>
        <button onClick={()=>onValue("+")}>+</button>
        
      </div>
      <div class="secnd_row">
        <button onClick={()=>onValue("4")}>4</button>
        <button  onClick={()=>onValue("5")}>5</button>
        <button  onClick={()=>onValue("6")}>6</button>
        <button onClick={()=>onValue("*")}>*</button>
        
      </div>
      <div class="secnd_row">
        <button  onClick={()=>onValue("3")}>3</button>
        <button  onClick={()=>onValue("2")}>2</button>
        <button  onClick={()=>onValue("1")}>1</button>
        <button onClick={()=>onValue("-")}>-</button>
        
      </div>
      <div class="secnd_row">
        
        <button  onClick={()=>onValue("0")}>0</button>
        <button  onClick={()=>onValue(".")}>.</button>
        <button onClick={handleclick}>=</button>
        <button  onClick={()=>onValue("/")}>/</button>
        
      </div>
    </div>

  )

}
export default App
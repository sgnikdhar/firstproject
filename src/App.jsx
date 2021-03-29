import React, { useState } from 'react';
import "./index.css"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
/*var ReactDOM = require('react-dom');*/

/*import Heading from './Heading';
import Para from './Para';
function App() {
    return(
<>
<Heading/>
<Para/>
</>
    );
}*/




/*const SlotM=(props)=>{
let {x,y,z}=props;
if (x===y && y===z) {
  return(
<>
<div className="slot_inner">
  <h1>
    {x} {y} {z}
  </h1>
  <h1>This is Matching</h1>
</div>
</>
  )
}else{
  return(
    <>
    <div className="slot_inner">
      <h1>
        {x} {y} {z}
      </h1>
      <h1>This is not Matching</h1>
    </div>
    </>
      )
}

}

const App=() => {
    return (
      <>
      <h1>🎰WELCOME TO{" "}
      <span style={{fontWeight:"bold"}}> SLOT MACHINE GAME🎰</span></h1>
 <div className="slotmachine">
     <SlotM x='😄' y='😄' z='😄'/>
     <hr/>
     <SlotM x='😄' y='🎅' z='😄' />
     <hr/>
     <SlotM x='😄' y='🍌'  z='🐤'/>
     <hr/>
     <SlotM  x='😄' y='😠' z='😄'/>
     <hr/>
     </div>
      </>
    );
  }
export default App;*/
 

//react hoock//

/*const App=()=>{
  const state =useState();
  const [count,setCount]=useState(0);
  const IncNum=()=>{
    setCount(count+1);

  };
  return(
  <>
  <h1>{count}</h1>
  <button onClick ={IncNum}>Click Me</button>
  </>
  )
};
export default App;*/


// digital clock//

/*const App=()=>{
let Time =new Date().toLocaleTimeString()
const [Ctime, Settime]=useState(Time);
const Updatetime=()=>{
   Time =new Date().toLocaleTimeString();
Settime(Time);

};

  setInterval(Updatetime ,1000)

  return(
  <>
  <h1>{Ctime}</h1>

  </>
  )
};
export default App;*/

// react events//
const App=()=>{
//const[Name ,setname]=useState();
const[FullName ,Fullsetname]=useState({
  fname :"",
  lname :""
});
//const[lName ,setlname]=useState();
//const[lNamenew ,setlnamenew]=useState();
  const inputEvent=(event)=>{
    console.log(event.target.value);
    console.log(event.target.name);

   const value = event.target.value;
   const name = event.target.name;
   // setname(event.target.value);
   Fullsetname((prevalue)=>{
   
   
   
  if (name==="fname") {
    return {
      fname:value,
      lname:prevalue.lname,
    }
  }else if (name==="lname") {
    return {
      fname:prevalue.lname,
      lname:value,
    };
  }; 
  
  });
}
  /*const inputEventtwo =(event)=>{
    setlname(event.target.value)
     }*/
   const onSubmit =(event)=>{
     event.preventDefault();
     alert("Form submitted")
   // Fullsetname(Name);
   // setlnamenew(lName)

   };
   
  return (
    <>
    <div className="maindiv">
<form onSubmit={onSubmit}>
    <div>

      <h1> Hello ❤️{ FullName.fname} {FullName.lname}❤️ </h1>
      <input 
      type="text"
      name="fname" 
      onChange={inputEvent}
      value={FullName.fname}
      placeholder="Enter Your first Name">
      
      </input>
      <br/>
      <input 
      type="text" 
      name="lname"
      onChange={inputEvent}
      value={FullName.lname}
      placeholder="Enter Your last Name">
      
     
       </input>


      <button type ="submit">Click Me 👍</button>
    </div>
    </form>
    </div>
    </>
  );
};
export default App;


import React, { useState } from "react"
import "./index.css" 
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';


const Todolist=()=>{

    const[nam,setnam]=useState(0);
    const fname=()=>{
        setnam(nam+1)
    }
    const lname=()=>{
        if (nam>0) {
            setnam(nam-1)    
        }else{
            alert("sorry zero limit reached")
            setnam(0);
            
        }

        
    }

   return(
       <>
     <div className="main_class">
     <div className="center_class">
     <h1>{nam}</h1>
     <div className="btn_class">
     <Button onClick={fname} className="btn-green"><AddIcon/></Button>
     <Button onClick={lname} className="btn-red"><DeleteIcon/></Button>
     </div>
     </div>
     </div>

       </>

   )
}
export default Todolist;
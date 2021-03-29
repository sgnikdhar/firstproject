import React from "react"
import {Route,Switch} from "react-router-dom";
import About from "./About";
 import Contact from "./Contact";
 import Error from "./Error";
 import Manu from "./Manu";

 const AppP=()=>{
   return(
     <>
     <Manu/>
     <Switch>
         <Route exact path ="/" component ={About}/>
        <Route exact path ="/contact" component ={Contact}/>
        <Route component={Error}/>
     </Switch>
     </>
   )
 }
export default AppP;
 
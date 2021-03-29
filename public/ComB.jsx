import React from "react"
import { useContext } from "react";
import {Firstname ,Lastname} from "./Appp";
//import ComC from "./ComC"
ComB=()=>{
     const fname = useContext(Firstname);
     const lname = useContext(Lastname)
    return (
        <h1>
        My name is {fname}{lname}
    </h1>
    );
}
export default ComB;
import React from "react"
import Common from "./Common"
import Web from "../src/s.svg"
const Home=()=>{
    return(
        <>
     <Common 
         name='Code Like a Ninja with'
         imgsrc={Web} 
         visit='/services' 
         btname="Get started"/>
     
        </>
    )
};
export default Home;
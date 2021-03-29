import React from "react";
import Web from "../src/development.svg"


import Common from "./Common"        
        

const About=() => {
    return(
        <>
        <Common name='Welcome to about page with'
         imgsrc={Web} 
         visit='/contact' 
         btname="Contact now"/>
        </>
    )
};

        

export default About;

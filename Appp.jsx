import React, { createContext } from 'react';
import ComA from "./ComA";
// createContext provider consumer or useContext API//
const Firstname=createContext();
const Lastname=createContext();

const Appp=()=>{
    return (
        <>
    <Firstname.Provider value="sagnik">
    <Lastname.Provider value="Dhar">

   <ComA/>

    </Lastname.Provider>
 </Firstname.Provider>
 </>
    )
};
export default Appp;
export {Firstname ,Lastname};



import React from "react";
import {NavLink} from "react-router-dom"

const Manu  = () =>{
    return (
        <>
        <NavLink activeClassName="active_class" to="/">
            AboutUs
        </NavLink>
        <NavLink to ="/contact">
        ContactUs
        </NavLink>

        </>
    )
};
export default Manu;
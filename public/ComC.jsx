import React from "react";
import {Firstname ,Lastname} from "./Appp";


const ComC=()=>{
return (
    <>
    <Firstname.Consumer>
        {(fname)=>{
            return(
                <Lastname.Consumer>
                    {(lname)=>{
                        return(
                            <h1>
                                My name is {fname}{lname}
                            </h1>
                        )
                    }

                    }
                </Lastname.Consumer>
            )
        }}
    </Firstname.Consumer>
    </>
);
};
export default ComC;
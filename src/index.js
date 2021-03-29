/*var React =require('react');*/
//import React from 'react'
/*var ReactDOM = require('react-dom');*/
//import ReactDOM from 'react-dom'
/*import "./index.css";
/*ReactDOM.render('kya dikhana hai/ what to show','kaha dikhana hai/where to show','callback func');*/         /*jsx*/
/*const flname="sagnik"
const lname="Dhar"
const img1="https://i.ytimg.com/vi/x30YOmfeVTE/maxresdefault.jpg"
const dat= new Date().toLocaleDateString();
ReactDOM.render(
<div>
<h1>Hello Sagnik</h1>
<p> Sagnik is a good boy</p>
</div>,
//to return an array of elment//
document.getElementById('root'));
ReactDOM.render(
  [
  <h1>Hello jayi</h1>,
  <p> jayi is a good girl</p>,
  ],
document.getElementById('root'));
//using react .fragment  or shortcut is <> </>//  
ReactDOM.render(
   // <React.Fragment>//
   <>
    <h1>Hello jayi</h1>
    <p> jayi is a good girl</p>
   </>,
    document.getElementById('root'));
    ReactDOM.render(
      [
      <h1>Hello jayi</h1>,
      <p> jayi is a good girl{flname}</p>,//js expression
      ],
    document.getElementById('root'));
    ReactDOM.render(
      // <React.Fragment>//
      <>
       <h1>{`My first name is ${flname} and my last name is ${lname}`}</h1>
       <p> My lucky number is {5+5}</p>
       <p>Current Date is = {dat}</p>
      </>,
       document.getElementById('root'));
       //jsx attribute
       ReactDOM.render(
        // <React.Fragment>//
        <>
         <h1>{`My first name is ${flname} and my last name is ${lname}`}</h1>
         
         <p>Current Date is = {dat}</p>
         <img src="https://i.ytimg.com/vi/x30YOmfeVTE/maxresdefault.jpg"/>
        </>,
         document.getElementById('root'));
         //css styling and imprting css file//
         ReactDOM.render(
          // <React.Fragment>//
          <>
           <h1 className="heading">My name is {flname} {lname}</h1>
           
           <p>Current Date is = {dat}</p>
           <div className="fb">
           <img src="https://i.ytimg.com/vi/x30YOmfeVTE/maxresdefault.jpg"/>
           <img src="https://imgc.allpostersimages.com/img/print/u-g-Q1046XL0.jpg?w=400&h=267"/>
         </div>
          </>,
           document.getElementById('root'));*/
           
/*import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
let dat= new Date();
 dat= dat.getHours();
 let greeting=''
 const cssStyle={};
 if(dat >= 1 && dat < 12){
  greeting="Good morning";
  cssStyle.color="green"
  
 }
 else if(dat >= 12 && dat< 19){
  greeting="Good Afternoon"
  cssStyle.color="yellow"

 }
 else{
  greeting="Good Night"
  cssStyle.color="black"
 }
ReactDOM.render(
  // <React.Fragment>//
  <>
  <div>
   <h1>HELLO ! <span style={cssStyle}>{greeting}</span></h1>
   </div>
  </>,
   document.getElementById('root'));*/

/* import React from 'react';
/*var ReactDOM = require('react-dom');*/
/*import ReactDOM from 'react-dom';

/*import {Add, Sub, Mul, Div} from './Calc';
ReactDOM.render(
  <>
 <ul>
   <li>The add of two number {Add(40,10)}</li>
   <li>The sub of two number {Sub(40,10)}</li>
   <li>The multiplication of two number {Mul(40,10)}</li>
   <li>The division of two number {Div(40,20)}</li>
 </ul>
  </>,
 document.getElementById('root'));*/
 /*import React from 'react';
 /*var ReactDOM = require('react-dom');*/
 /*import ReactDOM from 'react-dom';
 let dat= new Date();
 dat= dat.getFullYear();
 let greeting=" ";
 if (dat % 4===0) {
   greeting="This is a Leap-Year"
 }
 else{
  greeting="This is  not a Leap-Year"
 }
 ReactDOM.render(
   <>
   <h1>current year is {dat}</h1>
<p> <span>{greeting}</span></p>
   </>,
  document.getElementById('root'));*/
 
  import React from 'react';
  /*var ReactDOM = require('react-dom');*/
  import ReactDOM from 'react-dom';
  import{BrowserRouter } from "react-router-dom";
  import Apps from "./Apps";
  import "./index.css";
  
 /*import App from "./App";*/
 
   
 ReactDOM.render(
   <>
  <BrowserRouter>
    <Apps/>
  </BrowserRouter>
  </>,
 document.getElementById("root"));
 
 
 
 /*import Coma from "./Coma";
 ReactDOM.render(<Coma/>, 
 document.getElementById("root"));*/

  
 /* ReactDOM.render(
    <BrowserRouter>
    <AppP/>
     </BrowserRouter>,
  
 document.getElementById("root"));*/

  
  //spread operator//
  
  /*const fullname=["Sagnik","Dhar"];
  const biodata =[1,19,"male",...fullname];

  console.log(biodata);*/
 
 


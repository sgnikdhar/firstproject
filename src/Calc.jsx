import React from 'react';
import ReactDOM from 'react-dom';
function Add(a,b) {
    let sum=a+b;
    return sum;
}
function Sub(a,b) {
    let sum=a-b;
    return sum;
}
function Mul(a,b) {
    let Mul=a*b;
    return Mul;
}
function Div(a,b) {
    let sum=a/b;
    return sum;
}
export {Add, Sub, Mul, Div}
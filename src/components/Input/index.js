import React from "react";
import * as C from "./styles"

const Input = ({ type, placeHolder, value, onChange }) =>{
    return <C.Input 
    value={value}
    onChange={onChange}
    placeholder={placeHolder}
    type={type}/>
}

export default Input;
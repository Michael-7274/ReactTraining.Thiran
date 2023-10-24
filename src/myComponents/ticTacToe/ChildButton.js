import React, { useEffect, useState } from 'react'
import './style.css'
export default function ChildButton({ boxValueAndIndexArray, updateTurn }) {//needs optimization, need better naming 

    let text = boxValueAndIndexArray[0];
    let index = boxValueAndIndexArray[1];

    return (
        <button className="button" onClick={()=>{updateTurn(index)}}><h1>{text}</h1></button>
    )
}
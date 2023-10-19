import React, { useState } from 'react'
import './style.css'
export default function ChildButton({ index, turnNo, updateTurn ,setArrayValues}) {
    const [text, setText] = useState(index);
    const [clicked, setClicked] = useState(false);
    function changingTurn() {
        if (!clicked) {
            if ((turnNo % 2) == 0) {
                setText('x');
                updateTurn(turnNo + 1);
                setArrayValues(index,'x');
            }
            else {
                setText("o");
                updateTurn(turnNo + 1);
                setArrayValues(index,'o');
            }
            setClicked(true);
        }
    }
    return (
        <button className="button" onClick={() => { changingTurn() }}><h1>{text}</h1></button>
    )
}
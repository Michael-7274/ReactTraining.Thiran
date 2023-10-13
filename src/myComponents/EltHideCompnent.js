import React from 'react'
import { useState } from 'react'

export default function EltHideCompnent() {
const[display,setdisplay]=useState("")
function hide(){
setdisplay("none")
}
  return (
    <>
    <h1 >First h1</h1>
    <h1 style={{display:display}}>Second h1</h1>
    <button onClick={hide}>Hide Second</button>
    </>
  )
}

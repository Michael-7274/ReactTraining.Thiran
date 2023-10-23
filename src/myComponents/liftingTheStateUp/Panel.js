import React, { useState } from 'react'

export default function Panel({text,index,currentIndex,changeCurrentIndex}) {

  return (
    <>
    <div>{(index==currentIndex)?<p>{text}</p>:<button onClick={()=>{changeCurrentIndex(index)}}>Change state</button>}</div>
    </>
    
  )
}

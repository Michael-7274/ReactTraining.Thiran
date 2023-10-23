import React, { useState } from 'react'
import Panel from './Panel';

export default function Accordin() {
    let text=["First para","Second para"]
    let panel=[];
    const [currentIndex,setCurrentIndex]=useState(-1);
    for(let i=0;i<2;i++){
      //two separate components are pushed - the states are unique for each component
        panel.push(<Panel text={text[i]} index={i} currentIndex={currentIndex} changeCurrentIndex={setCurrentIndex}/>)
    }
  return (
    <>
    <div>Accordin</div>
    {panel}
    </>
  )
}

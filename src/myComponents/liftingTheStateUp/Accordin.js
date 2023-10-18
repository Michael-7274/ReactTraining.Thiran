import React from 'react'
import Panel from './Panel';

export default function Accordin() {
    let panel=[];
    for(let i=0;i<2;i++){
        panel.push(<Panel/>)
    }
  return (
    <>
    <div>Accordin</div>
    {panel}
    </>
  )
}

import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import mainarr from '../EmployeeDataComponent';

export default function Details() {
  const{name}=useParams();
  //To get from an api
  // useEffect(() => {
  //   const{name}=useParams();//called only once- avoids calls in re-rendering
  // }, [])
  //slug-like encrypted id
  let empImgSrc='';
  let empRole='';
  let empDetails='';
  for(let i=0;i<mainarr.length;i++)
  {
    if(mainarr[i].name==name){
      empImgSrc=mainarr[i].src
      empRole=mainarr[i].role;
      empDetails=mainarr[i].details;

    }
  }
  return (
    <>
    <div><img src={empImgSrc} style={{ width: 200, height: 200, borderRadius: 200 / 2 }} /></div>
    <div>Name:{name}</div>
    <div>Role:{empRole}</div>
    <div>Details:{empDetails}</div>
    </>
  )
}

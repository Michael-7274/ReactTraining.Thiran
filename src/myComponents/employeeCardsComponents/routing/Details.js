import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//import mainarr from '../EmployeeDataComponent';

export default function Details() {
  const { name  } = useParams();
  const [dataArr, setDataArr] = useState([]);
  const [empDetails, setEmpDetails] = useState({});//we're storing an object here so use curly braces inside the useState({})
  const{src,role,details}=empDetails//Ask sir on how this destructuring works, as normal assignment usually gave an error
  useEffect(() => {
    getData();
  }, [])

  //async- lets the other code lines execute without stopping the flow, continues the flow after getting th
  const getData = async () => {
    //try is used because it's an async function
    try {
      //await-stops the execution flow until it's function is complete
      const response = await fetch('http://localhost:3000/test.json')
      const data = await response.json();
      console.log(data);
      setDataArr(data);
    }
    catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    for (let i = 0; i < dataArr.length; i++) {

      if (dataArr[i].name == name) {
        //use destructuring here
        //re-rendering is not triggered when you set as variables here ,only state invokes re-rendering
        console.log(dataArr[i]);
        setEmpDetails(dataArr[i]);
        
      }

    }
  }, [dataArr])

  return (
    <>
      <div><img src={src} style={{ width: 200, height: 200, borderRadius: 200 / 2 }} /></div>
      <div>Name:{name}</div>
      <div>Role:{role}</div>
      <div>Details:{details}</div>
    </>
  )
}

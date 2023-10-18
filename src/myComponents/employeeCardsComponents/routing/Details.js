import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//import mainarr from '../EmployeeDataComponent';

export default function Details() {
  const { name } = useParams();
  const [dataArr, setDataArr] = useState([]);
  const [empImg, setEmpImg] = useState();
  const [empRole, setEmpRole] = useState();
  const [empDetails, setEmpDetails] = useState();

  // const getData = () => {
  //   fetch('http://localhost:3000/test.json')
  //     .then((response) => {
  //       //console.log(response.json());// gives a promise that the states that the promise is fulfilled and the jsondata is also there
  //       return response.json();
  //     })
  //     .then((data) => { console.log(data); setDataArr(data) })
  //     .catch((error) => { console.error(error) })
  // }
//async function  getaa(){}
  const getData=async()=>{//async- lets the other code lines execute without stopping the flow
    try{//try is used because it's an async function
      const response= await fetch('http://localhost:3000/test.json')//await-stops the execution flow until it's function is complete
      const data= await response.json();
      console.log(data);
      setDataArr(data);
    }
    catch(err){
      console.error(err);
    }

  }
  useEffect(() => {
    getData();
  }, [])
  useEffect(() => {
    for (let i = 0; i < dataArr.length; i++) {

      if (dataArr[i].name == name) {
        setEmpImg(dataArr[i].src)
        setEmpRole(dataArr[i].role);
        setEmpDetails(dataArr[i].details);
      }

    }
  }, [dataArr])

  return (
    <>
      <div><img src={empImg} style={{ width: 200, height: 200, borderRadius: 200 / 2 }} /></div>
      <div>Name:{name}</div>
      <div>Role:{empRole}</div>
      <div>Details:{empDetails}</div>
    </>
  )
}

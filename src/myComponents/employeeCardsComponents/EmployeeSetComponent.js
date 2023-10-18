import React from 'react'
import { useState } from 'react'
import EmployeeShowComponent from './EmployeeShowComponent'
import { useEffect } from 'react'
import Pagination from '../paginationComponent/Pagination';
import '../paginationComponent/Pagination.css';
//import mainarr from '../employeeCardsComponents/EmployeeDataComponent';
export default function EmployeeSetComponent() {
  

  const[mainarr,setMainArr]=useState([]);
  const [empData, setEmpData] = useState(mainarr);
  const[pageLength,setPageLength]=useState();

  // getting data from json document
  //////////////////////////////////////
  const getData=()=>{
    fetch('test.json').then((response)=>{return response.json();}).then((data)=>{console.log(data);setMainArr(data);})
  }
  //this useEffect is used to load the data from the JSON document
  useEffect(() => {
    getData();
    console.log(empData);
  }, [])

  //this useEffect is used to call the setEmpData() as soon as the mainarr is updated as the previous useEffect that 
  //called getData() is a callback function
  useEffect(() => {
    setEmpData(mainarr);
    setPageLength(Math.ceil(mainarr.length/5));
  }, [mainarr])
  
  //////////////////////////////////////
  
  //const [pageNo, setPageNo] = useState(1)

  // useEffect(() => {//called whenever empData is modified
  //   console.log(empData)
  // }, [empData])


  // function filter(event) {
  //   let option= document.querySelector("#dropDown").value;

  //   if(option==="default"){
  //     setEmpData(mainarr)


  //   }
  //   if(option==="IT"){
  //     setEmpData(mainarr.filter(function(el){
  //       return el.role=="IT"
  //     }))
  //   }
  //   if(option==="Business"){
  //     setEmpData(mainarr.filter(function(el){
  //       return el.role=="Business"
  //     }))
  //   }
  //   if(option==="Accountant"){
  //     setEmpData(mainarr.filter(function(el){
  //       return el.role=="Accountant"
  //     }))
  //   }
  // }

  
  
  //const pageLength = Math.ceil(empData.length / 5);
  // const pageArr=[];
  // for(let i=1;i<=pageLength;i++)
  // {
  //   pageArr.push(i)
  // }

  //console.log("Hi");// the parent component is re-rendered when the params to onPageChange() is passed from the child component

  //The function below is used to filter the objects and limit the size of empData to 5
  function onPageChange(currentIndex = 1) {
    let role=document.querySelector("#dropDown").value;
    if (role && role!=="default") {

      console.log("Role changed", currentIndex)
      let empArray = [];
      setPageLength(Math.ceil(mainarr.filter(function (el) { return el.role == role }).length/5));
      empArray = mainarr.filter(function (el) { return el.role == role }).slice((currentIndex-1)*5,currentIndex*5)
      //empArray = mainarr.filter(function (el) { return el.role == role })
      setEmpData(empArray)
    }
    else {
      console.log(currentIndex)

      let empArray = [];
      setPageLength(Math.ceil(mainarr.length/5));
      empArray = mainarr.slice((currentIndex-1)*5,currentIndex*5)
      //console.log(empArray)
      setEmpData(empArray)
      return empArray
    }


  }
  function onRoleChange() {
    onPageChange(1)
  }
  //var arr=onPageChange()//we usually do this to get data from API

  //pagination(1)
  return (
    <>



      <select id="dropDown" onChange={onRoleChange} defaultValue="default">
        <option value="default" >All employees</option>
        <option value="IT">IT</option>
        <option value="Business">Business</option>
        <option value="Accountant">Accountant</option>
      </select>


      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {
          empData.slice(0,5).map((vals) => {
            console.log(empData);
            return (
              
                <EmployeeShowComponent src={vals.src} name={vals.name} role={vals.role} />
              

            )
          })

        }
      </div>

      <div className='center'>

        {/* {pageArr.map((val)=>{ return <Pagination val={val} getPgNo={pagination} />})} */}
        <Pagination totalPages={pageLength} changePage={onPageChange} />
      </div>

    </>
  );
}

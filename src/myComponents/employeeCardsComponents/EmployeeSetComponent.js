import React from 'react'
import { useState } from 'react'
import EmployeeShowComponent from './EmployeeShowComponent'
import { useEffect } from 'react'
import Pagination from '../paginationComponent/Pagination';
import '../paginationComponent/Pagination.css';

export default function EmployeeSetComponent() {
  const mainarr = [{
    src: "https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_-1024x515.jpg",
    name: "JIM",
    role: "IT"
  },
  {
    src: "https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_-1024x515.jpg",
    name: "JOHN",
    role: "Business"
  },
  {
    src: "https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_-1024x515.jpg",
    name: "Jessie",
    role: "Accountant"
  },
  {
    src: "https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_-1024x515.jpg",
    name: "Kate",
    role: "IT"
  },
  {
    src: "https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_-1024x515.jpg",
    name: "Larry",
    role: "Business"
  },
  {
    src: "https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_-1024x515.jpg",
    name: "Misha",
    role: "Accountant"
  },
  {
    src: "https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_-1024x515.jpg",
    name: "Nate",
    role: "IT"
  },
  {
    src: "https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_-1024x515.jpg",
    name: "Nathan",
    role: "Business"
  },
  {
    src: "https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_-1024x515.jpg",
    name: "Neha",
    role: "Accountant"
  },
  {
    src: "https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_-1024x515.jpg",
    name: "Nirma",
    role: "IT"
  },
  {
    src: "https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_-1024x515.jpg",
    name: "Ellie",
    role: "Business"
  },
  {
    src: "https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_-1024x515.jpg",
    name: "Emma",
    role: "Accountant"
  },
  {
    src: "https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_-1024x515.jpg",
    name: "Alexa",
    role: "IT"
  },
  {
    src: "https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_-1024x515.jpg",
    name: "Anna",
    role: "Business"
  },
  {
    src: "https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_-1024x515.jpg",
    name: "Bashyam",
    role: "Accountant"
  },
  {
    src: "https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_-1024x515.jpg",
    name: "Barath",
    role: "IT"
  },
  {
    src: "https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_-1024x515.jpg",
    name: "Bejoy",
    role: "Business"
  },
  {
    src: "https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_-1024x515.jpg",
    name: "Bala",
    role: "Accountant"
  },
  {
    src: "https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_-1024x515.jpg",
    name: "Lars",
    role: "IT"
  },
  {
    src: "https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_-1024x515.jpg",
    name: "Leo",
    role: "Business"
  },
  {
    src: "https://fj-employer-blog.s3.amazonaws.com/employer-blog/wp-content/uploads/2020/08/25093203/benefits-of-flexible-work-for-companies-and-employees_-1024x515.jpg",
    name: "Linga",
    role: "Accountant"
  }
  ];
  const [empData, setEmpData] = useState(mainarr);

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

  //The function below is used to filter the objects and limit the size of empData to 5
  const pageLength = Math.ceil(mainarr.length / 5);
  // const pageArr=[];
  // for(let i=1;i<=pageLength;i++)
  // {
  //   pageArr.push(i)
  // }

  function onPageChange(currentIndex=1, role){
    if(role){
      
      console.log("Role changed",currentIndex)
      let empArray=[];
      empArray=mainarr.filter(function(el){return el.role==role}).slice(((currentIndex-1)*5),(currentIndex*5))
      setEmpData(empArray)
    }
    else{
      console.log(currentIndex)
    
      let empArray=[];
      empArray=mainarr.slice(((currentIndex-1)*5),(currentIndex*5))
      //console.log(empArray)
      setEmpData(empArray)
      return empArray
    }


  }
  function onRoleChange(event){
    let role=event.target.value;
    onPageChange(1,role)
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
          empData.map((vals) => { return <EmployeeShowComponent src={vals.src} name={vals.name} role={vals.role} /> })
          
        }
      </div>
      <div className='center'>

        {/* {pageArr.map((val)=>{ return <Pagination val={val} getPgNo={pagination} />})} */}
        <Pagination  totalPages={pageLength} changePage={onPageChange}/>
      </div>

    </>
  )
}

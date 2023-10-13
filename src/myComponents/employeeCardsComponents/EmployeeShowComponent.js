import React from 'react'

export default function EmployeeShowComponent({ src, name, role }) {
  return (
    <>
      
        <div style={{ backgroundColor: "red", width: 200, height: 300 ,margin:"20px"}}><img src={src} style={{ width: 200, height: 200, borderRadius: 200 / 2 }} /><p>Name:{name}</p><p>Role:{role}</p></div>
      
    </>
  )
}

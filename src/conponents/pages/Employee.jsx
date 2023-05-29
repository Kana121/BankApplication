import React, { useEffect, useState } from 'react'

function Employee() {
    const [emp,setEmp]=useState([])
    useEffect(()=>{
console.log("mounted...");
fetch("http://localhost:8080/api/v1/employees").then((res)=>res.json()).then((res)=>{
setEmp(res)
    })
    },[])
  return (
    <div>
    <h1>Employee data</h1>
      <table className='table table-bordered'>
    {
        emp.map((e)=>{
            return(
                <tr>
                    <td>{e.id}</td>
                    <td>{e.firstName}</td>
                    <td>{e.lastName}</td>
                    <td>{e.lastName}</td>
                    <td><button>delete</button></td>
                    
                </tr>
            )
        })
    }
      </table>
      
    </div>
  )
}

export default Employee;


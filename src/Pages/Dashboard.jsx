import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getResultApi } from '../../Services/allAPI';
import { Container } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';



function Dashboard() {
  const [alldata,setAlldata]=useState([])
  useEffect(()=>{
    getAllProjects()

  },[])

 const getAllProjects=async()=>{

   const result = await getResultApi()
        setAlldata(result.data)
  } 
  return (
    <div>
       <Container>
         <Table striped bordered hover className='mt-5'>
        <thead>
        
          <tr > 
            <th className='bg-primary'>First Name</th>
            <th className='bg-primary' >Last Name</th>
            <th className='bg-primary'>Address</th>
            <th className='bg-primary'>Email</th>
            <th className='bg-primary'>Mobile</th>
            <th className='bg-primary'>DOB</th>
            <th className='bg-primary'>Gender</th>
            <th className='bg-primary'>Courses</th>
          </tr>
        </thead>
        <tbody>
          {    alldata && alldata.map((data,index)=>(
            
            <tr key={index}>
            <td>{data.fName}</td>
            <td>{data.lName}</td>
            <td>{data.address}</td>
            <td>{data.email}</td>
            <td>{data.mobile}</td>
            <td>{data.dob}</td>
            <td>{data.gender}</td>
            <td>{data.course}</td>
  
          </tr>
            ))
          }
       
          
        </tbody>
      </Table>
      <Link to={'/home'}><Button variant="light" size="sm" className="mt-4 ">Back</Button></Link>
       </Container>
      
   
    </div>
  )
}

export default Dashboard
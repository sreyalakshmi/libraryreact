import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
  const[data,changedata]=useState(
   [ 
  ]
  )
  const fetchData=()=>{
    axios.get("http://localhost:8080/view",data).then(
      (response)=>{
        changedata(response.data)
      }
    ).catch()
  }
  useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>
    <tr>
      <th scope="col">title</th>
      <th scope="col">author</th>
      <th scope="col">published year</th>
      <th scope="col">price</th>
    </tr>
  </thead>
  <tbody>
    {data.map(
      (value,index)=>{
        return <tr>
        <td scope="row">{value.title}</td>
        <td>{value.author}</td>
        <td>{value['published year']}</td>
        <td>{value.price}</td>
      </tr>
      }
    )}
    
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewAll
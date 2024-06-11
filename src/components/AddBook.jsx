import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddBook = () => {
    const[data,changedata]=useState(
        {
        "title":"",
        "author":"",
        "published year":"",
        "price":""
    }
    )
    const inputHandler=(event)=>{
        changedata({...data,[event.target.name]:event.target.value},[])
    }
    const readvalue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/add",data).then(
            (response)=>{
                console.log(response.data)
            
            if (response.data.status=="success") {
                alert("successfully added")
            } else {
                alert("error")
            }
        }
        ).catch()
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">book title</label>
                            <input type="text" className="form-control" name= "title" value={data.title} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">category</label>
                            <select  id="" className="form-control" name="" >
                                <option value="fiction">fiction</option>
                                <option value="biography">biography</option>
                                <option value="autobiography">autobiography</option>
                            </select>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">published year</label>
                            <input type="date" id="" className="form-control" name="published year" value={data['published year']} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">author name</label>
                            <input type="text" className="form-control" name= "author" value={data.author} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">description</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">distributer name</label>
                        <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">publisher name</label>
                        <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">price</label>
                        <input type="text" className="form-control" name= "price" value={data.price} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">edition</label>
                        <input type="text" className="form-control" />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readvalue}>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br></br>
    </div>
  )
}

export default AddBook
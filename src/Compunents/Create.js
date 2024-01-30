import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export const Create = () => {

const [name,SetName] = useState("")
const [email,SetEmail] = useState("")
const history = useNavigate();
const header = {"Acess-Control-Allow-Origin": "*"};

const handleSubmit=( ) => {
    console.log('click')
axios.post('https://65b7855946324d531d54d167.mockapi.io/crud-youtube',{
   name: name, email:email,header 
} )  
.then(() => {
history("/read")
});
}; 
  return (
    <>
    <div className='d-flex justify-content-between m-2'>
    <h1>Create</h1>
    <Link to="/read">
    <button className='btn btn-primary'>Show Data</button>
    </Link>
    </div>
    <form>

    <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="Text" className="form-control" onChange={(e) => SetName(e.target.value)}/>
  </div>
  <div classNameName="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" aria-describedby="emailHelp" onChange={(e) => SetEmail(e.target.value)}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <button type="button" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
</form>
    </>
  )
}


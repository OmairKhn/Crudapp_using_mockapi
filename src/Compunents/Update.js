import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
export const Update = () => {
    const [id,Setid] = useState("")
    const [name,SetName] = useState("")
    const [email,SetEmail] = useState("")
 
 const navigate =  useNavigate();  

    useEffect(() =>{
       Setid(localStorage.getItem("id")) 
       SetName(localStorage.getItem("name")) 
       SetEmail(localStorage.getItem("email")) 
    },[]);
    const handleupdate = (e) => {
       e.preventDefault();
        axios.put(`https://65b7855946324d531d54d167.mockapi.io/crud-youtube/${id}`,
       { name:name,
        email:email,
       }
        ).then(() => {
           navigate("/read")
        })
    }
  return (
    <>
  <form>

<div className="mb-3">
<label for="exampleInputPassword1" className="form-label">Name</label>
<input type="Text" className="form-control" value={name} onChange={(e) => SetName(e.target.value)}/>
</div>
<div classNameName="mb-3">
<label for="exampleInputEmail1" className="form-label">Email address</label>
<input type="email" className="form-control" value={email} onChange={(e) => SetEmail(e.target.value)}/>
<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
</div>
<button type="button" className="btn btn-primary " onClick={handleupdate}>Submit</button>
    <Link to="/read">
    <button className='btn btn-secondary mx-2'>Back</button>
    </Link>
    
</form>
    </>
  )
}


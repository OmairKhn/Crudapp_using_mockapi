import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
 const [data,setData] = useState([]);
 const [tabledark,Settabledark] = useState('')

function getData() {
    axios
    .get('https://65b7855946324d531d54d167.mockapi.io/crud-youtube')
    .then((res) => {
        setData(res.data)
    });
}
 function Deletedata(id) {
    axios
    .delete(`https://65b7855946324d531d54d167.mockapi.io/crud-youtube/${id}`)
    .then(() =>{
        getData()
    })
 }
const setlocalstorage = (id, name , email) => {
    localStorage.setItem("id" , id);
    localStorage.setItem("name" , name);
    localStorage.setItem("email" , email);

};

useEffect(() => {
    getData();
},[]);

  return (
   <>
   <div class="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={() => {
    if (tabledark === "table-dark" ) Settabledark("");
    else Settabledark("table-dark");
  }}/>
</div>
     <div className='d-flex justify-content-between m-2'>
    <h1>Read operation</h1>
    <Link to="/">
    <button className='btn btn-primary'>Create data</button>
    </Link>
    </div>
   <table className={`table ${tabledark}`}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  {
    data?.map((eachdata) => {
        return(
            <tbody>
            <tr>
              <th scope="row">{eachdata.id}</th>
              <td>{eachdata.name}</td>
              <td>{eachdata.email}</td>
              <td>
                <Link to="/update">
                <button className='btn-success' onClick={() =>setlocalstorage(
                    eachdata.id,eachdata.name,eachdata.email)
                    }>Edit</button>
           </Link>
              </td>
           
              <td><button className='btn-danger' onClick={() =>Deletedata(eachdata.id)}>Delete</button></td>
            </tr>
          </tbody>
        )
    })
}
</table>   
   
   
   </>
  )
}

export default Read
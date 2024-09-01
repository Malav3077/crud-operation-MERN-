import React, { useEffect, useState } from 'react'
import "./Add.css"
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const Update = () => {

    const users = {
        fname:"",
        lname:"",
        email:"",
    }
    const {id} = useParams();
    const [user,setUser] =useState(users)
    const navigate = useNavigate()

    const inputChangeHandler= (e)=>{
    const {name ,value} = e.target;
    setUser({...user,[name]:value}) ;      
    }


    useEffect(()=>{
        axios.get(`http://localhost:4000/api/v1/user/getone/${id}`,)
        .then((response)=>{
            setUser(response.data)
        }).catch((error)=>{
            console.log(error);
            
        })
    },[id]);

    const submitForm=async(e)=>{
        e.preventDefault();
        await axios.put(`http://localhost:4000/api/v1/user/update/${id}`,user)
        .then((response)=>{
        toast.success(response.data.message,{position:"top-right"}) 
        navigate("/")  

         }).catch(error=>console.log(error));
    }
  return (
   <div className='addUser'>
        <Link to =  {"/"}>Back</Link>
        <h3>Add New Users</h3>
        <form className='addUserForm' onSubmit={submitForm}>
            <div className="inputGroup">
                <label htmlFor="fname">First Name</label>

                <input type="text" value={user.fname} name="fname" id="fname" onChange={inputChangeHandler}   autoComplete='off' placeholder='First Name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="lname">First Name</label>

                <input type="text" value={user.lname} name="lname" id="lname" onChange={inputChangeHandler}   autoComplete='off' placeholder='Last Name' />
            </div>
            <div className="inputGroup">
                <label htmlFor="Email">First Name</label>

                <input type="Email" value={user.email} name="email" id="email" onChange={inputChangeHandler}   autoComplete='off' placeholder='Email' />
            </div>
           
            <div className="inputGroup">
               <button type="submit"> Update User</button>
            </div>
        </form>
    </div>
  )
}

export default Update
import React, { useState } from 'react'
import "./add.css"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import toast from "react-hot-toast"

const Add = () => {

    const users = {
        fname:"",
        lname:"",
        email:"",
        password:"",
    }

    const [user,setUser] = useState(users)
    const navigate = useNavigate();

    const inputHandler = (e)=>{
        const {name,value} = e.target;
        setUser({...user,[name]:value})
     }

    const submitForm= async(e)=>{
         e.preventDefault();
         await axios.post("http://localhost:4000/api/v1/user/create",user)
         .then((response)=>{
            toast.success(response.data.message,{position:"top-right"}) 
            navigate("/")           
         }).catch(error=>console.log(error));
         
        
    }
    return (
        <div className='addUser'>
            <Link to={"/"}>Back</Link>
            <h3>Add New Users</h3>
            <form className='addUserForm' onSubmit={submitForm}>
                <div className="inputGroup">
                    <label htmlFor="fname">First Name</label>

                    <input type="text" name="fname" id="fname"  onChange={inputHandler}  autoComplete='off' placeholder='First Name' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="lname">Last Name</label>

                    <input type="text" name="lname" id="lname"  onChange={inputHandler}  autoComplete='off' placeholder='Last Name' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="Email"> Email</label>

                    <input type="Emai" name="email" id="email"  onChange={inputHandler}  autoComplete='off' placeholder='Email' />
                </div>
                <div className="inputGroup">
                    <label htmlFor="password">Password</label>

                    <input type="password" name="password" id="password" onChange={inputHandler}   autoComplete='off' placeholder='Password' />
                </div>
                <div className="inputGroup">
                    <button type="submit">Add User</button>
                </div>
            </form>
        </div>
    )
}

export default Add
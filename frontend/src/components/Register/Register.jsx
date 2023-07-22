/* eslint-disable no-unused-vars */
import React from 'react'

const Register = () => {
    const[name,setName]=React.useState("");
    const[email,setEmail]=React.useState("");
    const[skills,setSkills]=React.useState("");
    const[password,setPassword]=React.useState("");

    const onSubmit=(e)=>{
        e.preventDefault();
    }

  return (
    <div>
        <form onSubmit={onSubmit} style={styles.form}>
         <div className="mb-2">
            <label className="form-label">Name</label>
            <input type="text" className='form-control' placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
         </div>
         <div className="mb-2">
            <label className="form-label">Email address</label>
            <input type="text" className='form-control' placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
         </div>
         <div className="mb-2">
            <label className="form-label">Skills/Interests</label>
            <input type="text" className='form-control' placeholder='(seperate with commas)' onChange={(e)=>{setSkills(e.target.value)}}/>
         </div>
         <div className="mb-2">
            <label className="form-label">Password</label>
            <input type="password"  className='form-control' placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
         </div>
            <button className="btn btn-primary">Sign Up</button>
        </form>
    </div>
  )
}


const styles={
    form:{
        display:"flex",
        'flex-direction':"column",
        width: "40%",
        margin: "auto",
        'margin-top': "3rem",
        gap:"1.6rem"
    }
  }

export default Register
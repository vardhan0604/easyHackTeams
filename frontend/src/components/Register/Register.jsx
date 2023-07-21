/* eslint-disable no-unused-vars */
import React from 'react'

const Register = () => {
    const[name,setName]=React.useState("");
    const[email,setEmail]=React.useState("");
    const[password,setPassword]=React.useState("");

    const onSubmit=(e)=>{
        e.preventDefault();
    }

  return (
    <div>
        <form onSubmit={onSubmit} style={styles.form}>
            <input type="text" placeholder='Name' onChange={(e)=>{setName(e.target.value)}}/>
            <input type="text" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
            <button>Sign Up</button>
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
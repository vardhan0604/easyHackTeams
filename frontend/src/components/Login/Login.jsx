import React from 'react'

const Login = () => {
    const[email,setEmail]=React.useState("");
    const[password,setPassword]=React.useState("");

    const onSubmit=(e)=>{
        e.preventDefault();
    }
    
  return (
   <form style={styles.form} onSubmit={onSubmit}>
    <input type="text" placeholder='Email'value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    <input type="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    <button>Login</button>
   </form>
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

export default Login
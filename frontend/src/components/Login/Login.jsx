import React from 'react'

const Login = () => {
    const[email,setEmail]=React.useState("");
    const[password,setPassword]=React.useState("");

    const onSubmit=(e)=>{
        e.preventDefault();
    }
    
  return (
   <form style={styles.form} onSubmit={onSubmit}>
    <div className='mb-2'>
        <label className="form-label">Email address</label>
        <input type="text" className='form-control' placeholder='Email'value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
    </div>
    <div className='mb-2'>
        <label className="form-label">Password</label>
        <input type="password" placeholder='Password' value={password}  className='form-control' onChange={(e)=>{setPassword(e.target.value)}}/>
    </div>
    <button className="btn btn-primary">Login</button>
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
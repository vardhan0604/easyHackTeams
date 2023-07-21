import React from 'react'

const Login = () => {
    
  return (
   <form style={styles.form}>
    <input type="text" placeholder='Email'/>
    <input type="password" placeholder='Password'/>
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
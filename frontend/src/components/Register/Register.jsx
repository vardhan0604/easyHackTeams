import React from 'react'

const Register = () => {

  return (
    <div>
        <form action="" style={styles.form}>
            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
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
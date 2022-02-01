import React, { useState } from 'react'
import {Navigate } from 'react-router-dom';
import { variables } from '../components/Variables';
const Login =(props:{setUserName:(username:string)=>void}) =>
{
const [username,setusername] = useState('');
    const[redirect,setRedirect] = useState(false);
    const [password,setpassword] = useState('false');

const submit = async (e: SyntheticEvent)=>{
    e.preventDefault();
    
   //const response =  await fetch(variables.API_AUTH+'User',{
    const response =  await fetch(variables.API_AUTH+'Login',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        credentials:'include',
        body:JSON.stringify({
            username,
            password
        })
    });
    const content = await response.json();
    if(content.message == 'success')
     { 
        props.setUserName(username);
        setRedirect(true);
     }
  }
  if(redirect)
  {
      return(<Navigate  to="/" />)
  }

    return(
        
     <form  onSubmit={submit}>
    
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

 
      <input className="form-control form-control-lg"  placeholder="User Name" required
       onChange={e=>setusername(e.target.value)}
      />
      
    
      <input className="form-control form-control-lg" type="password"  placeholder="Password"
      onChange={e=>setpassword(e.target.value)}
      />


   
     <input type="checkbox" value="remember-me"/> Remember me
    
    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    
  </form>
       
    );
}
export default Login;
import React, { useState } from 'react'
import {Navigate } from 'react-router-dom';
import { variables } from '../components/Variables';
import { TrinitySpinner   } from 'loading-animations-react';

const Login =(props:{setUserName:(username:string)=>void}) =>
{
const [username,setusername] = useState('');
    const[redirect,setRedirect] = useState(false);
    const [password,setpassword] = useState('false');
    const[loading,setLoading] = useState(false);

const submit = async (e: SyntheticEvent)=>{
    e.preventDefault();

    setLoading(true);

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
     else
     {
         alert(content.message);
         setLoading(false);

     }
  }
  if(redirect)
  {
      return(<Navigate  to="/" />)
  }

  if(loading)
  {
      return(<div  style={{
        width: '20%', paddingleft: '10%'
       
    }}><TrinitySpinner/></div>)
  }
    return(
        
     <form  onSubmit={submit}>
    
    <h1 className="h3 mb-3 fw-normal">Please Sign In</h1>

 
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
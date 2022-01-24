import React, { SyntheticEvent ,useState } from 'react';
import {Navigate } from 'react-router-dom';

const Register = ()=> {
    const[username,setusername] = useState('');
    const[password,setpassword] = useState('');
    const[confirmpassword,setconfirmpassword] = useState('');
    const[redirect,setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent)=>{
        e.preventDefault();

        const response = await fetch('https://localhost:44317/api/register',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                username,
                password,
                confirmpassword
            })
        });
        
        const content = await response.json();
        setRedirect(true);
    }
    if(redirect)
    {
        return(<Navigate  to="/login" />)
    }
    return (
        <form onSubmit={submit}>
    
        <h1 className="h3 mb-3 fw-normal">Please Register</h1>
    
        
          <input  className="form-control form-control-lg"  placeholder="UserName" required
            onChange={e=>setusername(e.target.value)}
          />
        
          <input type="password" className="form-control form-control-lg" placeholder="Password" required
          onChange={e=>setpassword(e.target.value)}
          />

            <input type="password" className="form-control form-control-lg" placeholder="Confirm Password" required
          onChange={e=>setconfirmpassword(e.target.value)}
          />
        <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        
      </form>
    
    );
};

export default Register

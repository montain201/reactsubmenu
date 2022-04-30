import React, { SyntheticEvent ,useState } from 'react';
import {Navigate } from 'react-router-dom';
import { variables } from '../components/Variables';

const Register = ()=> {
    const[username,setusername] = useState('');
    const[password,setpassword] = useState('');
    const[confirmpassword,setconfirmpassword] = useState('');
    const[redirect,setRedirect] = useState(false);
    //const[hasalert,setHasalert] = useState(false);

    const submit = async (e: SyntheticEvent)=>{
        e.preventDefault();


        //const response = await fetch('https://localhost:44317/api/register',{
        const response =  await fetch(variables.API_AUTH+'register',{

            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                username,
                password,
                confirmpassword
            })
        });
        
        const content = await response.json();
        //const hasalert = '';
        

      
        // if(content.errors!=null)
        // {
        //   var length = content.errors.ConfirmPassword.length;  // find an array length
        
        //     for(var i=0; i< length; i++){
        //       alertx += content.errors.ConfirmPassword[i];  // concat Array value to a string variable
        //       if(i < (length-1) ){
        //         alertx += '\n';  // add separator
        //       }
        //     }
        //   alert(alertx);
        //   return;
        // }
        //if(!alertx.trim()){
          
         // console.log(redirect);
          setRedirect(false);
          const alertcount = content.length;
             alertcount > 0 && setRedirect(true)

          // for (const element of content){
          //   //alertx += element.Description+"\n"; } ;
          //   console.log(element.Description);
          //   //setHasalert(true);
          //   setRedirect(false);
          // }
         // console.log(redirect);

        // alert(alertx);
        // return;
       // }
      //   console.log(hasalert);
      //   if(!hasalert)
      //   // if(!alertx.trim())
      //   //    { 
      //        setRedirect(true);
      //  //    }
      
    }
    //console.log(redirect);
    if(redirect)
    {
        return(<Navigate  to="/" />)
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

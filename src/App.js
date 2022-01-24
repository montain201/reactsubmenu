import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Overview from './pages/Overview';
import { Reports,ReportsOne,ReportsTwo,ReportsThree } from './pages/Reports';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import React,{useEffect, useState} from 'react'


function App() {
      const[username,setUserName] = useState('');
      useEffect(()=>{
      (
          async()=>{
            const response =  await fetch('https://localhost:44317/api/user',{
              headers:{'Content-Type':'application/json'},
              credentials:'include',
    });
      const content = await response.json();
  console.log(content.userName);
  setUserName(content.userName);
      }
  )();
});
  return (
    <Router>
      <Sidebar username={username} setUserName={setUserName}/>
        <main className='form-signin'>
      <Routes>
        <Route path='overview'  element = {<Overview />} />
        <Route path='reports'  element = {<Reports />} />
        <Route path='reports/reports1'  element = {<ReportsOne />} />
        <Route path='reports/reports2'  element = {<ReportsTwo />} />
        <Route path='reports/reports3'  element = {<ReportsThree />} />
        <Route path="/" exact element={<Home username={username} />} />
        <Route path="/login"  element={<Login setUserName={setUserName}/>}/>
        <Route path="/register"  element={<Register/>}/>

      </Routes>
        </main>
    </Router>
  );
}

export default App;

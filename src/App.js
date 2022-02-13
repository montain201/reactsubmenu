import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { Reports,ReportsOne,ReportsTwo,ReportsThree } from './pages/Reports';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import React,{useEffect, useState} from 'react'
import BaseInfo from './pages/BaseInfo';
import { Department } from './pages/baseinfo/department';
import {Employee}  from './pages/baseinfo/employee';
import { variables } from './components/Variables';
import { Ticket } from './pages/ticket/ticket';
import TicketDetail from './pages/ticket/TicketDetail';


function App() {
      const[username,setUserName] = useState('');
      const[TicketId,setTicketId] = useState('');
      const queryParams = new URLSearchParams(window.location.search)
      const statement = queryParams.get("statement")
      console.log(statement);
      //let [searchParams, setSearchParams] = useSearchParams();
      // searchParams.get("statement");
      
      useEffect(()=>{
  //     (
  //         async()=>{
  //           //const response =  await fetch('https://localhost:44317/api/user',{
  //           const response =  await fetch(variables.API_AUTH+'User',{
              
  //             headers:{'Content-Type':'application/json'},
  //             credentials:'include',
  //   });
  //     const content = await response.json();
      
  //     setUserName(content.UserName);
  //     }
  // )();
      
});
  return (
    
    <Router>
      
      <Sidebar username={username} setUserName={setUserName}/>
        <main className='form-signin'>
      <Routes>
        <Route path='baseinfo'  element = {<BaseInfo />} />
        <Route path="/baseinfo/employee" element={<Employee/>} />
        <Route path="/baseinfo/department" element={<Department />} />
        <Route path="/login"  element={<Login setUserName={setUserName}/>}/>
        <Route path="/register"  element={<Register/>}/>
        <Route path='reports'  element = {<Reports />} />
        <Route path='reports/reports1'  element = {<ReportsOne />} />
        <Route path='reports/reports2'  element = {<ReportsTwo />} />
        <Route path='reports/reports3'  element = {<ReportsThree />} />
        <Route path="/" exact element={<Home username={username} />} />
        <Route path="/ticket/ticket" element={<Ticket setTicketId={setTicketId}/>} />
        <Route path="/ticket/ticketDetail" element={<TicketDetail  statement={statement} />} />
        {/* <TicketDetail statement='Hello' /> */}

      </Routes>
        </main>
    </Router>
  );
}

export default App;

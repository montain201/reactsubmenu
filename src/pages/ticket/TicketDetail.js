import React from 'react';
import Cookies from 'js-cookies';
import { variables } from '../../components/Variables';
import { Component } from 'react/cjs/react.production.min';

  class  TicketDetail   extends  Component {

    refreshList(tid){
      const token = Cookies.getItem('jwt');
       
       fetch(variables.API_URL+'Ticket/GetTicketDtl?tId='+tid,{
           method:'GET',
           headers:{'Authorization': 'Bearer '+token, 
                'Content-Type':'application/json'}
       })
       .then(response => response.json())
       .then(data=>{this.setState({tickets:data});
     });
   }

   componentDidMount(){
    // const tid ={this.props.statement};
    // this.refreshList(tid);
}

  render(){

   
    return<div>{this.props.statement} I am feeling</div>;
  }
  }
  export default TicketDetail;
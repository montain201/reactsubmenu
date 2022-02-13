import React from 'react';
import Cookies from 'js-cookies';
import { variables } from '../../components/Variables';
import { Component } from 'react/cjs/react.production.min';

  class  TicketDetail   extends  Component {

    constructor(props){
      super(props);
      this.state={
        ticketStatusList:[]
      }
    }

    refreshList(tid){
      const token = Cookies.getItem('jwt');
       
       fetch(variables.API_URL+'Ticket/GetTicketDtl?tId='+tid,{
           method:'GET',
           headers:{'Authorization': 'Bearer '+token, 
                'Content-Type':'application/json'}
       })
       .then(response => response.json())
       .then(data=>{this.setState({ticketStatusList:data});
     });
   }

   componentDidMount(){
    //this.setState({TicketId:this.props.statement});
    this.refreshList(this.props.statement);
}

  render(){
    const{
      ticketStatusList
    } = this.state;
    //return<div>{this.props.statement} I am feeling</div>;
    return(
    <div>
        <table className="table table-striped tablertl">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TicketNumber</th>
                            <th>TicketType</th>
                            <th>TicketState</th>
                            <th>TicketDescription</th>
                            <th>CreationDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ticketStatusList.map(tck=>
                            <tr key={tck.TicketStatusId}>
                                <td>{tck.TicketStatusId}</td>
                                <td>{tck.TicketNo}</td>
                                <td>{tck.TicketType}</td>
                                <td>{tck.TicketState}</td>
                                <td>{tck.TicketStatusDescription}</td>
                                <td>{tck.CreationDate}</td>
                                
                            </tr>
                            )}
                    </tbody>
                </table>
    </div>
    )
  }
  }
  export default TicketDetail;
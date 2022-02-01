import { result } from 'lodash';
import React,{Component} from 'react';
import { variables } from '../../components/Variables';
import Cookies from 'js-cookies';

export class Ticket extends Component{

    constructor(props){
        super(props);

        this.state={
            tickets:[],
            modalTitle:"",
            TicketStatusId:0,
            TicketNo:"",
            TicketType:"",
            TicketState:"",
            TicketDescription:"",
            CreationDate:""
        }
    }

    refreshList(){
       const token = Cookies.getItem('jwt');
            
        fetch(variables.API_URL+'ticket',{
            method:'GET',
            headers:{'Authorization': 'Bearer '+token, 
                 'Content-Type':'application/json'}
        })
        .then(response => response.json())
        .then(data=>{this.setState({tickets:data});
      });
    }

    

    componentDidMount(){
        this.refreshList();
    }
    
    changeTicketType=(e)=>{
        this.setState({TicketType:e.target.value});
    }

    changeTicketDescription=(e)=>{
        this.setState({TicketDescription:e.target.value});
    }

    addClick(){
        this.setState({
           modalTitle:"Create Ticket",
           TicketStatusId:0,
           TicketNo:"",
           TicketType:"",
           TicketState:"",
           TicketDescription:"",
           CreationDate:""
           
       });
    }
    createClick(){
        const tt = this.state.TicketType;
        if(tt == '' || tt == 'Please Select')
        {return;}
        
        
        fetch(variables.API_URL+'ticket',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                TicketType:this.state.TicketType,
                TicketDescription:this.state.TicketDescription,
                // DateOfJoining:this.state.DateOfJoining,
                // PhotoFileName:this.state.PhotoFileName,
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        });
    }

    changeTicketDescription=(e)=>{
        this.setState({TicketDescription:e.target.value});
    }

    // ticketAttachment1=(e)=>{
    //     e.preventDefault();

    //     const formData = new FormData();
    //     formData.append("file",e.target.files[0],e.target.files[0].name);

    //     fetch(variables.API_URL+'employee/savefile',{
    //         method:'POST',
    //         body:formData,
    //     })
    //     .then(res=>res.json())
    //     .then(data=>{
    //         this.setState({PhotoFileName:data});
    //     })
    // }
    
    render(){
        const{
            modalTitle,
            tickets,
            TicketStatusId,
            TicketNo,
            TicketType,
            TicketState,
            TicketDescription,
            CreationDate
        }=this.state;
        return(
            <div>
                <button type="button" className="btn btn-primary m-2 float-end"  data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>this.addClick()}>New Ticket</button>
                <table className="table table-striped tablertl">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TicketNumber</th>
                            <th>TicketType</th>
                            <th>TicketState</th>
                            <th>TicketDescription</th>
                            <th>CreationDate</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets.map(tck=>
                            <tr key={tck.TicketStatusId}>
                                <td>{tck.TicketStatusId}</td>
                                <td>{tck.TicketNo}</td>
                                <td>{tck.TicketType}</td>
                                <td>{tck.TicketState}</td>
                                <td>{tck.TicketDescription}</td>
                                <td>{tck.CreationDate}</td>
                                <td>
                                    <button type ="button" className="btn btn-light mr-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                        </svg>
                                    </button>

                                    <button type ="button" className="btn btn-light mr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                        <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                            )}
                    </tbody>
                </table>
                
                <div className="modal fade" id="exampleModal" tableIndex="-1" aria-hidden = "true">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="moal-title">{modalTitle}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="d-flex flex-row bd-highlight mb-3">
                                <div className="p-2 w-100 bd-highlight">
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">Ticket Type</span>
                                            <select className="form-select" onChange={this.changeTicketType}
                                                    value={TicketType}>
                                                    <option key="NoOne">Please Select</option>
                                                    <option key="Development">Development</option>
                                                    <option key="Bug">Bug</option>
                                                </select>
                                        </div>
                                        <div className="input-group mb-3">
                                            <span className="input-group-text">Description</span>
                                            <textarea className="form-control" value={TicketDescription} 
                                               onChange={this.changeTicketDescription}/>
                                            
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="file" className="form-control chosefile" onChange={this.ticketAttachment1} />
                                            {/* src={PhotoPath+PhotoFileName} */}
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="file" className="form-control chosefile" onChange={this.ticketAttachment2}/>
                                        </div>
                                        <div className="input-group mb-3">
                                            <input type="file" className="form-control chosefile" onChange={this.ticketAttachment3}/>
                                        </div>
                                        
                                </div>
                                
                            </div>
                                   {TicketStatusId == 0 ? 
                                    <button type = "button" 
                                    className= "btn btn-primary float-start" 
                                    onClick={()=>this.createClick()}
                                    >Create Ticket</button>
                                    :null}

                                    {TicketStatusId != 0 ? 
                                    <button type = "button" 
                                    className= "btn btn-primary float-start" 
                                    onClick={()=>this.updateClick()}
                                    >Update Ticket</button>
                                    :null}
                        </div>
                        </div>
                    </div>
                </div>

            </div>)
    }
}
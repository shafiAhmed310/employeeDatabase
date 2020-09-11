import React, { Component } from 'react';
import Axios from 'axios';

class ViewEmployee extends Component {
    constructor(props){
        super(props);
        this.state={
            employee:[],
            id:""
        }

    }

    componentDidMount(){
        const {id} = this.state;
       Axios.get("http://dummy.restapiexample.com/api/v1/employees").then(res=>{

           
           this.setState({employee:res.data.data})
       }).catch(err=>{
           console.log(err);
       })
    }
    render() {
        const {employee} = this.state;
        return (
            <div>
            <h2>Employee Details</h2>
            {
                employee.map(emp=>
                 <div className="card">
                     <div className="card-body">
                     <ul>
                         <li>{emp.id}</li>
                         <li>{emp.employee_name}</li>
                         <li>{emp.employee_age}</li>
                         <li>{emp.employee_salary}</li>
                     </ul>
                     </div>
                 </div>   
                    )
            }
                
            </div>
        );
    }
}

export default ViewEmployee;

import React, { Component } from 'react';


class AddEmployee extends Component {
    constructor(props){
        super(props);
        this.state={
            employee_name:"",
            employee_age:"",
            employee_salary:"",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        let postData = {
            employe_name:this.state.employee_name,
            employee_age:this.state.employee_age,
            employee_salary:this.state.employee_salary
        }
       window.fetch("/create" ,{
           method:"POST",
           headers:{
               "content-type":"application/json"
           },
           body:JSON.stringify(postData)
       }).then(data=>{
           data.json().then(res=>{
               console.log(res);
           }).catch(err=>{console.log(err)})
       }).catch(err=>console.log(err))
    }
    render() {
        const {employee_name , employee_age , employee_salary} = this.state;
        return (
            <div className="card mt-4"  style={{width:"40%"}}>
              <center> <h2 className="mt-2">Add Employee Details</h2></center> 
                <div className="card-body">
 <form onSubmit={this.handleSubmit}>
<div  className="form-group">
<label className="form-check-label" htmlFor={employee_name}>Name</label>
<input id="employee_name" 
className="form-control"
name="employee_name"
value={this.employee_name}
onChange={this.handleChange}
/>
</div>
<div  className="form-group">
<label  className="form-check-label" htmlFor={employee_age}>Age</label>
<input id="employee_age"
className="form-control" 
name="employee_age"
value={this.employee_age}
onChange={this.handleChange}
/>
</div >
<div  className="form-group">
<label  className="form-check-label" htmlFor={employee_salary}>Salary</label>
<input id="employee_salary" 
className="form-control"
name="employee_salary"
value={this.employe_name}
onChange={this.handleChange}
/>
 <button className="btn btn-primary mt-3">Submit</button>
 
</div>

</form> </div>
            </div>
        );
    }
}

export default AddEmployee;


 
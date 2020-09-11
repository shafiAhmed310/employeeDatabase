import React from 'react';
import { Link } from 'react-router-dom';



const EmployeeTable = ({employeeData , loading}) => {
    if(loading){
        return <h2>Loading.....</h2>
    }
    return (
        <div>
            <div className="search">
        <Link to="/add-employee" className="btn btn-primary btn-lg">Add Employee
        
        
        
        </Link>
        <input type="search" placeholder="search by name" />
        </div>
        <table className="table table-bordered  ">
              <thead>
                <tr>
                  <th scope="col" >Id</th>
                  <th scope="col"  >Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Salary</th>
                  <th scope="col" >Action</th>
                </tr>
                </thead>
        {
          employeeData.map(employee=>
           
            
                <tbody key={employee.id}>
                  <tr>
                     <th scope="row">{employee.id}</th>
                     <td>{employee.employee_name}</td>
                     <td>{employee.employee_age}</td>
                     <td>{employee.employee_salary}</td>
                     <td >
                       <Link to="/view" className="btn btn-primary  " style={{margin:"10px"}}>View</Link>
                       <a href="#" className="btn btn-primary ">Eidt</a>
                     
                     </td>
                  </tr>
                </tbody>
               
                )
        }
              

            </table>
            
        </div>
    );
};

export default EmployeeTable;
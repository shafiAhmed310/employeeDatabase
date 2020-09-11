
import React, {useState ,useEffect, Fragment } from 'react';
import {BrowserRouter , Route } from 'react-router-dom';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import axios from 'axios';
 import EmployeeTable from './Components/EmployeeTable'
 import Pagination from './Components/Pagination'
 import './App.css'
import AddEmployee from './Components/AddEmployee';
import ViewEmployee from './Components/ViewEmployee';

    const App =()=> {
      const [employeeData , setEmployeeData] = useState([]);
      const [loading , setLoading] = useState(false);
      const [currentPage , setCurrentPage] = useState(1);
      const [employeePerPage ] = useState(5);
  
      useEffect(()=>{
        const fetchEmployee = async ()=>{
          setLoading(true);
          const res = await axios.get("http://dummy.restapiexample.com/api/v1/employees");
          setEmployeeData(res.data.data);
          setLoading(false);
        }
        fetchEmployee();
      },[])
  
      const indexOfLastEmployee = currentPage * employeePerPage;
      const indexOfFirstEmployee = indexOfLastEmployee - employeePerPage;
      const currentEmployee = employeeData.slice(indexOfFirstEmployee , indexOfLastEmployee)
   
      //change page
      const paginate = pageNumber => setCurrentPage(pageNumber);
   
   
      return (
        <Fragment>
          <div className="container">
          <BrowserRouter>
            <Route exact path="/add-employee"  component={AddEmployee}  /> 
            <Route exact path="/view" component={ViewEmployee} />
             <EmployeeTable employeeData={currentEmployee} loading={loading} />
             <Pagination  employeePerPage={employeePerPage} totalEmployee={employeeData.length} paginate={paginate} />
      </BrowserRouter>
    
    
    </div>
    
        </Fragment>
      
      
    );
  }


export default App;








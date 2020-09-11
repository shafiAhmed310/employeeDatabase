import React from 'react';

const Pagination = ({employeePerPage , totalEmployee , paginate}) => {
    const pageNumbers = [];
    for(let i=1;i<=Math.ceil(totalEmployee/employeePerPage);i++){
        pageNumbers.push(i)
    }
    return (
        <div>
            <nav>
                <ul className="pagination " style={{float:"right"}} >
                    {
                        pageNumbers.map(number=>(
                            <li key={number} className="page-item">
                                <a  onClick={()=>paginate(number)} href="#" className="page-link" style={{color:"white" ,backgroundColor:"#006bdd" }}>
                                    {number}
                                </a>
                            </li>
                        ))
                    }

                </ul>
            </nav>
            
        </div>
    );
};

export default Pagination;
import React, {useEffect, useState, Fragment } from "react";
import { setConstantValue } from "typescript";
import {Link} from 'react-router-dom'
import { instance } from 'Utils';
import "../../styles/global.scss"


 
    



   

  
    

   


export const Userlist: React.FC = () => {
    


    const [customers, set] = useState([]);
    useEffect(()=>{
    instance.get('/user'
    ).then(
      res=>set(res.data)
    )

      console.log(customers)
    
    },[])
   
    async function submitForm(id:any) {

        console.log(id);
         instance.delete('/user',{
           
            data: {
              id:id
            }
          }
    
        ).then(
    
          res=>console.log(res)
          
        )
        
    
       
      }

  
  return (
      
    <div>
   

    <div className="container">
    
        <div className="row">
            <table className="table table-bordered">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">Firstname</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">Description</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { customers.map(customer =>
                        <tr key={customer.id}>
                            <td>{customer.username}</td>
                            <td>{customer.password}</td>
                            <td>{customer.email}</td>
                            <td>{customer.firstName}</td>
                            <td>{customer.lastName}</td>
                            <td>{customer.dateOfBirth}</td>
                            <td>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group" style={{ marginBottom: "20px" }}>
                                    <button type="button" onClick={(e) => {e.preventDefault(); window.location.href=`edit/${customer.id}`;  }}> Edit customer</button>
                                    <button type="button"  onClick={() => {submitForm(customer.id)}}>Delete Customer</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>

</div>
  );
};

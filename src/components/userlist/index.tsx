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

  function update(id:any){
    console.log(id)
    let filteredArray = customers.filter(item => item.id !== id)
    set(filteredArray)
  }
  return (
      
    <div>
   

    <div className="container">
    
        <div className="row">
            <table className="table table-bordered">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">username</th>
                        <th scope="col">password</th>
                        <th scope="col">Email</th>
                        <th scope="col">first name</th>
                        <th scope="col">last name </th>
                        <th scope="col">Birthday</th>
  
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
                                    <button type="button"  onClick={() => {update(customer.id);submitForm(customer.id)}}>Delete Customer</button>
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

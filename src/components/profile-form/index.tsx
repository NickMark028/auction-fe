import React, { useEffect, useState, Fragment } from 'react';
import jwt_decode from 'jwt-decode';
import '../../styles/profile.scss';
import  instance  from 'utils/axiosClient';
import moment from 'moment';
export const UserInfo: React.FC = () => {
    const [account, setaccount] = useState({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        dateOfBirth: '',
      });
      useEffect(()=>{
      const token=  localStorage.getItem('user-token')
      
      const id:any=  jwt_decode(token)
    
        instance.get('/api/user/profile',{
          params:{
              id:id.userId
            }
        }
        ).then((res)=>{
            console.log(res.data)
                setaccount(res.data)
               
        }).catch((err)=>{
            console.log(err.response)
        })
        
      },[])
function submitform(){
    const token=  localStorage.getItem('user-token')
      
    const id:any=  jwt_decode(token)
instance.patch('/api/user/profile',{
    username: account.username,
    firstName:account.firstName,
    lastName: account.lastName,
    email: account.email,
    dateOfBirth: account.dateOfBirth,
    id:id.userId
}).then((res)=>{
    
})
.catch((err)=>{

})

}

function handleChange(evt) {
    const value = evt.target.value;

    setaccount({
      ...account,
      [evt.target.name]: value,
    });
  }


  return (
    <div className="App">
        <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet" />
        <form>
          <div className="contentform">
            <div className="leftcontact">
              <div className="form-group">
                <p>First name </p>
                <span className="icon-case"><i className="fa fa-user"></i></span>
                <input  type="text" name="firstName" defaultValue={account.firstName} onChange={handleChange} />         
              </div>
              <div className="form-group">
                <p>E-mail </p>
                <span className="icon-case"><i className="fa fa-envelope-o"></i></span>
                <input  type="email" name="email" defaultValue={account.email} onChange={handleChange}/>         
              </div>
              <div className="form-group">
                <p>Birthday </p>
                <span className="icon-case"><i className="fa fa-calendar"></i></span>
                <input  type="date" name="dateOfBirth" defaultValue={account.dateOfBirth} onChange={handleChange}/>               
              </div>
            </div>

            <div className="rightcontact">
              <div className="form-group">
                <p>Last name </p>
                <span className="icon-case"><i className="fa fa-user"></i></span>
                <input  type="text" name="lastName" defaultValue={account.lastName} onChange={handleChange}/>
              </div>
              <div className="form-group">
                <p>Username </p>
                <span className="icon-case"><i className="fa fa-user"></i></span>
                <input  type="text" name="username" value={account.username} readOnly/>
              </div>
            </div>
          </div>
        </form>
        <button type="button" className="bouton-contact" onClick={submitform}>Save</button>
      </div>
  
  );
};

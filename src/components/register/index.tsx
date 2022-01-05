import React, { useEffect, useState, Fragment } from 'react';
import instance from '../../utils/axiosClient';
import '../../styles/global.scss';
import 'react-notifications/lib/notifications.css';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import Validator from '../../utils/validator';
import { useHistory } from 'react-router-dom';

const rules = [
  {
    field: 'username',
    method: 'isEmpty',
    validWhen: false,
    message: 'The username field is required.',
  },
  {
    field: 'username',
    method: 'isLength',
    args: [{ min: 5 }],
    validWhen: true,
    message: 'The username must be at least 5 characters.',
  },
  {
    field: 'username',
    method: 'isAlphanumeric',
    args: ['en-US'],
    validWhen: true,
    message: 'Invalid username.',
  },
  {
    field: 'email',
    method: 'isEmpty',
    validWhen: false,
    message: 'The email field is required.',
  },
  {
    field: 'password',
    method: 'isEmpty',
    validWhen: false,
    message: 'The Password field is required.',
  },
  {
    field: 'password',
    method: 'isLength',
    args: [{ min: 6 }],
    validWhen: true,
    message: 'The Password must be at least 6 characters.',
  },
  {
    field: 'password',
    method: 'contains',
    args: [' '],
    validWhen: false,
    message: 'The Password should not contain space.',
  },
  {
    field: 'firstName',
    method: 'isEmpty',
    validWhen: false,
    message: 'The Firstname field is required.',
  },
  {
    field: 'lastName',
    method: 'isEmpty',
    validWhen: false,
    message: 'The Lastname field is required.',
  },
  {
    field: 'dateOfBirth',
    method: 'isEmpty',
    validWhen: false,
    message: 'The Birthday field is required.',
  },
  {
    field: 'address',
    method: 'isEmpty',
    validWhen: false,
    message: 'The address field is required.',
  },
  {
    field: 'email',
    method: 'isEmail',
    validWhen: true,
    message: 'The email must be a valid email address.',
  },
];
const validate = new Validator(rules);
export const Register: React.FC = () => {
  const [account, setaccount] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    address: '',
    otp:''
  });
 
  const [errors, set] = useState<any>({ status: 'not ok' });
  const history = useHistory();
 
  function sendotp(){
  // console.log(account.email)
  instance.post('/api/user/mail',{
      email:account.email
  }).then((res)=>{
    console.log(res)
  })
  }
  
  useEffect(() => {
    if (errors.status === 'ok') {
      instance
        .post('/api/user', {
          username: account.username,
          password: account.password,
          firstName: account.firstName,
          lastName: account.lastName,
          email: account.email,
          dateOfBirth: account.dateOfBirth,
          address: account.address
        })
        .then((res) => {
          history.push('/login');
          NotificationManager.success(res.status, 'Register success', 3000);
        })
        .catch((err) => {
          // console.log(err.response);
          NotificationManager.error(
            err.response.status,
            'Register failed',
            3000
          );
        });
    }
  }, [errors]);
  function submitForm() {
    if (Object.keys(validate.validate(account)).length === 0) {
      instance.post('/api/user/verify-otp',{
        email:account.email,
        otp:account.otp
  
    }).then((res)=>{
       set({ status: 'ok' });
     
    }).catch((err)=>{
      NotificationManager.error(
        err.response.status,
        'Wrong otp',
        3000
      );
    })
    
    } else {
      set(validate.validate(account));
    }
    
  }
  function handleChange(evt) {
    const value = evt.target.value;

    setaccount({
      ...account,
      [evt.target.name]: value,
    });
  }
  return (
    <div className="outer">
      <div className="inner">
        <form>
          <h3>Register</h3>

          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              name="firstName"
              onChange={handleChange}
            />
            {errors.firstName && (
              <div
                className="validation"
                style={{ display: 'block', color: 'red' }}
              >
                {errors.firstName}
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              name="lastName"
              onChange={handleChange}
            />
            {errors.lastName && (
              <div
                className="validation"
                style={{ display: 'block', color: 'red' }}
              >
                {errors.lastName}
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              name="email"
              onChange={handleChange}
            />
            {errors.email && (
              <div
                className="validation"
                style={{ display: 'block', color: 'red' }}
              >
                {errors.email}
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Birthday</label>
            <input
              type="date"
              className="form-control"
              placeholder="Enter your birthday"
              name="dateOfBirth"
              onChange={handleChange}
            />
            {errors.dateOfBirth && (
              <div
                className="validation"
                style={{ display: 'block', color: 'red' }}
              >
                {errors.dateOfBirth}
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="address"
              className="form-control"
              placeholder="Enter address"
              name="address"
              onChange={handleChange}
            />
            {errors.address && (
              <div
                className="validation"
                style={{ display: 'block', color: 'red' }}
              >
                {errors.address}
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter username"
              name="username"
              onChange={handleChange}
            />
            {errors.username && (
              <div
                className="validation"
                style={{ display: 'block', color: 'red' }}
              >
                {errors.username}
              </div>
            )}
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              name="password"
              onChange={handleChange}
            />
            {errors.password && (
              <div
                className="validation"
                style={{ display: 'block', color: 'red' }}
              >
                {errors.password}
              </div>
            )}
          </div>
          <label>Otp</label>
          <div className="otp-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter otp"
              name="otp"
              onChange={handleChange}
            />
             <button
            type="button"
            className="btn btn-dark"
            onClick={sendotp}
          >
            send otp
          </button>
          </div>
          <div className='btn-control'>
          <button
            type="button"
            className="btn btn-dark btn-lg btn-block"
            onClick={submitForm}
          >
            Register
          </button>
          </div>
          <NotificationContainer />
          <p className="forgot-password text-right">
            Already have an{' '}
            <a href="/login" className="link">
              account ?
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

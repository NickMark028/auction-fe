import React, { useEffect, useState, Fragment } from 'react';
import { instance } from 'utils/utils';
import '../../styles/global.scss';
import 'react-notifications/lib/notifications.css';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';

function createNotification() {
  return () => {
    NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
  };
}

export const Register: React.FC = () => {
  const [account, setaccount] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
  });

  async function submitForm() {
    console.log(account);
    instance.post('/user', account).then((res) => console.log(res));
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
          </div>

          <button
            type="button"
            className="btn btn-dark btn-lg btn-block"
            onClick={submitForm}
          >
            Register
          </button>
          <p className="forgot-password text-right">
            Already have an <a href="/login">account ?</a>
          </p>
        </form>
      </div>
    </div>
  );
};

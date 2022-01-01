import React, {useEffect, useState, Fragment } from "react";
import  instance  from '../../utils/axiosClient';
import "../../styles/global.scss"
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { useCookies } from 'react-cookie';
import Cookies from 'universal-cookie';

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 // const [cookies, setCookie] = useCookies(['name']);
  const cookies = new Cookies();
  localStorage.setItem ('name', 'Bepatient');
  
  async function submitForm() {
    console.log(process.env.REACT_APP_BE_HOST);
    console.log({ email, password });
    instance
      .post("/auth", {
        username: email,
        password: password,
    }).then((res)=>{
    
   
      localStorage.setItem ("user-token", res.data.accessToken);
      console.log(res.data.userInfo)
      localStorage.setItem ("user-data", JSON.stringify(res.data.userInfo));
      NotificationManager.success(res.status, 'Login success', 3000);
    }
    )
    .catch((error) => {
      NotificationManager.error(error.response.status, 'Login Failed', 3000);
  })
  }
  async function createNotification() {
    console.log("not ok");
    return NotificationManager.error("Warning message", "fuck you", 3000);
  }

  return (
    <div className="outer">
      <div className="inner">
        <form>
          <h3>Log in</h3>

          <div className="form-group">
            <label>Email</label>
            <input
              type="username"
              className="form-control"
              placeholder="Enter email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-dark btn-lg btn-block"
            onClick={submitForm}
          >
            Sign in
          </button>
          <NotificationContainer />
          <div className="redirect">
            <p className="create-account text-left">
              <a href="/register">Create account</a>
            </p>
            <p className="forgot-password text-right">
              <a href="#">Forgot password?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

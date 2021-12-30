import React, {useEffect, useState, Fragment } from "react";
import { instance } from 'Utils';
import "../../styles/global.scss"




export const Login: React.FC = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function submitForm() {
    console.log(process.env.REACT_APP_BE_HOST);
    console.log({ email, password });
    instance.post('/auth',{
      username:email,
      password:password

    }).then(

      res=>console.log(res)
      
    )
    
  //   const res = await axios({
  //     url: 'http://localhost:3000/api/auth',
  //     method: 'post',
  //     data:{username:email,password:password}
  //  });
   
  }
  return (
    <div className="outer">
    <div className="inner">
    <form>

    <h3>Log in</h3>

    <div className="form-group">
        <label>Email</label>
        <input type="username" className="form-control" placeholder="Enter email"  id="email"  value={email}
          onChange={e => setEmail(e.target.value)} />
    </div>

    <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Enter password"  id="password" value={password}
          onChange={e => setPassword(e.target.value)} />
    </div>

    <div className="form-group">
        <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
        </div>
    </div>

    <button type="button" className="btn btn-dark btn-lg btn-block"  onClick={submitForm}>Sign in</button>
    <p className="forgot-password text-right">
        Forgot <a href="#">password?</a>
    </p>
</form>
</div>
      </div>
  );
};

import React from 'react'
// import { Link } from 'react-router-dom'

export default function SignupPage() {
  return (
    <div className='signupCont'>
            <div className="wrapper">
        <div className="container">
          <div className="col-left">
            <div className="login-text">
              <h3><i>InterviewConnect</i></h3>
              <h2>Welcome Back</h2>
              <p>Already have account.<br />It's totally free</p>
              <a className="btn" href="login">Login</a>
            </div>
          </div>
          <div className="col-right">
            <div className="login-form">
              <h2>Signup </h2>
              <form>
                <p>
                  <label>Username or email address<span>*</span></label>
                  <input type="text" placeholder="Username or Email" required />
                </p>
                <p>
                  <label>Name<span>*</span></label>
                  <input type="text" placeholder="Name" required />
                </p>
                <p>
                  <label>Password<span>*</span></label>
                  <input type="password" placeholder="Password" required />
                </p>
                <p>
                  <label>Conform Password<span>*</span></label>
                  <input type="password" placeholder="Conform Password" required />
                </p>
                <p>
                  <input type="submit" value="Sign Up" />
                </p>
              </form>
            </div>
          </div>
        </div>
        <div >
          <a href="/">Go to Home</a>
        </div>
      </div>

    </div>
  )
}

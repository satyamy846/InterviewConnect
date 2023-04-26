import React from 'react'

export default function LoginPage() {
  return (
    <div className='loginCont'>

      <div className="wrapper">
        <div className="container">
          <div className="col-left">
            <div className="login-text">
              <h2>Welcome Back</h2>
              <p>Create your account.<br />It's totally free.</p>
              <a className="btn" href="signup">Sign Up</a>
            </div>
          </div>
          <div className="col-right">
            <div className="login-form">
              <h2>Login</h2>
              <form>
                <p>
                  <label>Username or email address<span>*</span></label>
                  <input type="text" placeholder="Username or Email" required />
                </p>
                <p>
                  <label>Password<span>*</span></label>
                  <input type="password" placeholder="Password" required />
                </p>
                <p>
                  <input type="submit" value="Login In" />
                </p>
                <p>
                  <a href="/">Forget Password?</a>
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

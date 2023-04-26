import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function Navbar() {
  let navigate = useNavigate();
  let handlelogout = () => {
    localStorage.removeItem('token');
    navigate("/login");
  }
  return (
    <div className='NavbarCont'>
      <nav className="navbar navbar-expand-lg bg-color fixed-top"  >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">InterviewConnect</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <div className="d-flex justify-content-center w-100">
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <Link className="nav-link active nav-element" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-element" to="quiz">Quiz</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-element" to="about">Feedback</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link nav-element" to="about">Reviews</Link>
                </li>
              </ul>
            </div>
            {(!localStorage.getItem('token')) ? <form className="d-flex justify-content-end">
              <Link className="btn nav-btn mx-2" to="/auth/login" role="button">Login</Link>
              <Link className="btn nav-btn mx-2" to="/auth/signup" role="button">Signup</Link>
            </form> : <button className="btn btn-primary mx-2" onClick={handlelogout}> Logout</button>}
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

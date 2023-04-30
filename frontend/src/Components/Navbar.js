import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';

export default function Navbar(props) {

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
                  <Link className={`nav-link nav-element ${props.disabled ? 'disabled-link' : ''}`} to="quiz" >Quiz</Link> </li>
                <li className="nav-item">
                  <Link className="nav-link nav-element" to="about" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Feedback</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-element" href='#reviewNav'>Reviews</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link nav-element" href='#contactNav'>Contactus</a>
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

      {/* feedback modal code */}
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Feedback</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">Email:-</label>
                  <input type="text" className="form-control" id="recipient-name" />
                </div>
                <div className="mb-3">
                  <label for="message-text" className="col-form-label">Message:</label>
                  <textarea className="form-control" id="message-text"></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Send message</button>
            </div>
          </div>
        </div>
      </div>
      
      <Outlet />
    </div>
  )
}

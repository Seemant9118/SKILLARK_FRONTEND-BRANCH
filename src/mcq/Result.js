import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import logoimage from '../components/img/style/logo.png';
import Self from './Self.jpg';
import icon1 from './icon1.svg';
import icon2 from './icon2.svg';
import { toastContext } from '../context/skaContext'
import Axios from 'axios';
import PrivateData from '../components/data/PrivateData';

export default function Result() {
  const noti = useContext(toastContext);
  const [details, setDetails] = useState({})
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  useEffect(() => {
    if (sessionStorage.getItem('login')) {
      noti.addNewMessage(sessionStorage.getItem('email'), 'success');
      setEmail(sessionStorage.getItem('email'));
    } else {
      navigate('/login')
      noti.addNewMessage('login please', 'danger');
    }
  }, [])
  useEffect(() => {
    Axios.post(`${PrivateData.IP}/exam/result`,
      {
        email: email
      })
      .then(function (res) {
        setDetails(...res.data)
      })
  }, [email])
  console.log(details);
  return <>
    <nav className="navbar navbar-expand-md navbar-light text-center fw-bold">
      <div className="col-5 nav navbar-nav">
        <ul className="navbar-nav mb-md-0">
          <li className="nav-item mx-1">
            <Link className="nav-link" to='/test'>Home</Link>
          </li>
          <li className="nav-item mx-1">
            <Link className="nav-link" to='/test'>Details</Link>
          </li>
        </ul>
      </div>
      <div className='col-2'>
        <Link className=" navbar-brand" to="/">
          <img src={logoimage} className='img-fluid' alt='logo'
            style={{ height: '40px' }} /></Link>
      </div>
      <div className="col-5 nav navbar-nav">
        <ul className="navbar-nav mb-md-0 ms-auto me-5">
          {!sessionStorage.getItem('login') && <li className="nav-item">
            <Link className="nav-link" to='/login'>Log In</Link>
          </li>
          }
          {sessionStorage.getItem('login') &&
            <li className="nav-item">
              <div class="dropdown">
                <Link className="nav-link  rounded-circle bg-ska-secondary text-ska-primary" style={{ textDecoration: 'none', width: '40px' }}
                  id="dropdownMenuLink" data-bs-toggle="dropdown" to="#" role="button" aria-expanded="false">
                  {JSON.parse(sessionStorage['myDetails']).firstName.slice(0, 1).toUpperCase()}
                </Link>
                <ul class="ska-box dropdown-menu px-0" aria-labelledby="dropdownMenuLink">
                  <li><Link className="dropdown-item" to='/user/profile'>
                    <i class="bi bi-person-square" /> Profile</Link></li>
                  <li><Link class="dropdown-item" to='/user/mycourse'>
                    <i class="bi bi-file-play" /> My Courses</Link></li>
                  <li><Link className="dropdown-item" to='/logout'>
                    <i class="bi bi-box-arrow-right" /> Log Out</Link></li>
                </ul>
              </div>
            </li>
          }
        </ul>
      </div>
    </nav>
    <div className='App'>
{sessionStorage.getItem('login') &&
      <div className="containersss">
        <img className='Self' src={JSON.parse(sessionStorage['myDetails']).image} alt="" />
        <div className="box1">
          <h1>{JSON.parse(sessionStorage['myDetails']).firstName} {JSON.parse(sessionStorage['myDetails']).lastName}</h1>
          <h3>{email}</h3>
        </div>
        <div className="box2">
          <img className='icon1' src={icon1} />
          <h1>-</h1>
          <h3>Quiz Score</h3>
        </div>
        <div className="box3">
          <img className='icon2' src={icon2} />
          <h1>0</h1>
          <h3>Coding Score</h3>
        </div>
      </div>}
      <div className="container2">
        <h1>Performance Overview</h1>
        <div className="grid">
          <div className="row">
            <div className="col">
              <h3>Score Comparision</h3>
              <div className="col1-a">
                <p>YOUR SCORE</p>
                <h2>{details.assesmentPerformancePercentage} %</h2>
                <p>44 points than Average</p>
              </div>
            </div>
            <div className="col">
              <h3>Completion Time Comparision</h3>
              <div className="col1">
                <p>YOUR TIME</p>
                <h2>{details.timeTaken} Mins</h2>
                <p>faster than Average</p>
              </div>
            </div>
            <div className="col">
              <h3>Total Problems Solved</h3>
              <div className="col1">
                <p>PROBLEMS SOLVED</p>
                <h2>0 Problems</h2>
                <p>1 Less than Average</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>

}

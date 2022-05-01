import React, { useEffect, useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoimage from '../components/img/style/logo.png';
import Question from './Question';
import quizJSON from './quizJSON';
import { toastContext } from '../context/skaContext'
import Axios from 'axios';
import PrivateData from '../components/data/PrivateData';


const testButton = {
  marginBottom: '20px',
  padding: '8px 15px',
  fontSize: '16px',
  fontWeight: '400',
  borderRadius: '5px',
  border: '1px',
  backgroundColor: 'rgb(248, 248, 248)',
  boxShadow: '0 0 5px rgba(98, 99, 98, 0.405)',
}
export default function Tests() {
  const noti = useContext(toastContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [timer, setTimer] = useState({ mint: quizJSON.duration, sec: 1 });
  var time;
  useEffect(() => {
    if (sessionStorage.getItem('email')) {
      setEmail(sessionStorage.getItem('email'));
    } else {
      navigate('/login')
      noti.addNewMessage('login please', 'danger');
    }
    time = setInterval(() => {
      setTimer({ ...timer, sec: timer.sec - 1 })
      if (timer.sec === 0) {
        setTimer({ mint: timer.mint - 1, sec: 59 })
      }
      if (timer.mint === 0 & timer.sec === 30) {
        noti.addNewMessage('30sec left', 'danger');
      }
      if (timer.mint === 0 & timer.sec === 0) {
        handleFinish();
      }
    }, 1000)
    return () => clearInterval(time);

  })
  const [questionNum, setquestionNum] = useState(0);
  const handleQuestionNum = (n) => {
    if (n >= 0 && n < quizJSON.questions.length) {
      setquestionNum(n)
    }
  }

  const [ansSheet, setAnssheet] = useState([]);
  const handleMarks = (Q, Ans, mark) => {
    // console.log(ansSheet);
    if (JSON.stringify(ansSheet).includes(JSON.stringify({ Q: Q, Ans: Ans, M: mark }))) {
      // console.log('already Added');
    } else {
      setAnssheet([...ansSheet, { Q: Q, Ans: Ans, M: mark }])
      setAttempt([...attempt, Q])
      // console.log('Added');
      // console.log(ansSheet);
    }
    handleQuestionNum(questionNum + 1)
  }
  const [seen, setSeen] = useState([0]);
  seen.includes(questionNum) ? console.log() : setSeen([...seen, questionNum])
  const [attempt, setAttempt] = useState([]);


  // finish
  var totalMarkgot = 0;
  var percentGot = 0;
  var finalAnss = [];
  const handleFinish = () => {
    // zero all the dublicate element
    finalAnss = ansSheet;
    for (let i = 0; i < finalAnss.length; i++) {
      for (let j = i + 1; j < finalAnss.length; j++) {
        if (finalAnss[i].Q === finalAnss[j].Q) {
          finalAnss[i] = 0;
        }
      }
    }
    // remove all 0
    var i = finalAnss.length;
    while (i--) {
      if (finalAnss[i] === 0) {
        finalAnss.splice(i, 1);
      }
    }
    const finishmark = [];
    finalAnss.forEach(element => {
      finishmark.push(element.M)
    });
    totalMarkgot = finishmark.reduce((a, b) => parseInt(a) + parseInt(b));
    percentGot = (totalMarkgot / quizJSON.maxMarks) * 100;
    handleSubmmit();
  }
  const handleSubmmit = () => {
    let timeTaken = quizJSON.duration - timer.mint;
    Axios.post(`${PrivateData.IP}/exam/userassesment`,
      {
        assesmentTotalMarks: quizJSON.maxMarks,
        assesmentGainedMarks: totalMarkgot,
        assesmentPerformancePercentage: percentGot,
        selectedOption: finalAnss,
        timeTaken: timeTaken,
        email: email
      })
      .then(function (res) {
        if (res.data === 'I') {
          noti.addNewMessage('Done', 'success');
          navigate('/');
        } else {
          noti.addNewMessage('Something went wrongh', 'danger');
        }
      })
  }
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
        <ul className="navbar-nav mb-md-0 ms-auto">
          <li className="nav-item mx-1">
            <div className='nav-link'>
              <div className='text-black'>
                Time Left
                {` ${timer.mint < 10 ? '0' + timer.mint : timer.mint}:${timer.sec < 10 ? '0' + timer.sec : timer.sec}`}
              </div>
            </div>
          </li>
          <li className="nav-item mx-1">
            <button className="nav-link btn btn-ska-primary text-white fw-bold px-4"
              onClick={handleFinish}>
              Finish Test</button>
          </li>
        </ul>
      </div>
    </nav>
    <div className='row m-0'>
      <div className='col-3 p-4' style={{ height: '80vh', overflow: 'auto' }}>
        <div className='row justify-content-center'>
          {quizJSON.questions.map((item, index) => {
            return <div className='col-lg-3 col-md-4 col-sm-6'>
              <button style={testButton} onClick={() => handleQuestionNum(item.id - 1)}
                className={attempt.includes(index) ? `bg-ska-primary bg-opacity-75` : (seen.includes(index) ? `bg-warning bg-opacity-75` : ``)}
              >{item.id}</button>
            </div>
          })}
        </div>
      </div>
      <div className='col-9 ska-bg'>
        <div className='row justify-content-center'>
          <div className='col-10'>
            <Question
              data={quizJSON.questions[questionNum]}
              questionNum={questionNum}
              handleQuestionNum={handleQuestionNum}
              handleMarks={handleMarks}
              seen={seen}
              attempt={attempt}
            />
          </div>
        </div>
      </div>
    </div>
  </>
}

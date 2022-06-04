import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.css';
import './bootstrap/bootstrap.css';
import './App.css';
import Loginmodule from './components/Loginmodule';
import Contactus from './components/Contactus';
import Careers from './components/Careers';
import Home from './components/Home';
import Course from './components/Course';
import School from './components/School';
import Courses from './components/Courses';
import NotFounds from './components/NotFounds';
import Counselling from './components/Counselling';
import CounsellingReg from './components/CounsellingReg';
import Event from './components/Event';
import Login from './components/Login';
import Register from './components/Register';
import AddBlog from './blogs/AddBlog';

import Main from './common/Main';
import Logout from './common/Logout';

import Profile from './user/Profile';
import Dashboard from './user/Dashboard';
import Contact from './user/Contact';
import Notification from './user/Notification';
import EnrollCourse from './user/EnrollCourse';

// context
import Toast from './context/Toast'
import ContextApp from './context/ContextApp';
import UploadImage from './context/UploadImage';
//MCQ 1
import McqHome from './mcq/McqHome';
import Tests from './mcq/Tests';
import Result from './mcq/Result';
//MCQ 2
import McqHometwo from './mcq_2/McqHometwo';
import Teststwo from './mcq_2/Teststwo';
import Resulttwo from './mcq_2/Resulttwo';
//MCQ 3 
import McqHomethree from './mcq_3/McqHomethree'
import Teststhree from './mcq_3/Teststhree';
import Resultthree from './mcq_3/Resultthree';
//MCQ 4
import McqHomefour from './mcq_4/McqHomefour'
import Testsfour from './mcq_4/Testsfour';
import Resultfour from './mcq_4/Resultfour';

export default function App() {
  return (
    <BrowserRouter>
      {/* Toast for notification  */}
      <UploadImage>
        <Toast>
          <Routes>
            <Route path='*' element={<NotFounds />} />


            <Route path='' element={<Main />} >
              <Route path='/' element={<Home />} />
              <Route path='/blogs' element={<AddBlog />} />
              <Route path='/trainings' element={<Courses />} />
              <Route path='/school' element={<School />} />
              <Route path='/careers' element={<Careers />} />
              <Route path='/event' element={<Event />} />
              <Route path='/contactus' element={<Contactus />} />
              <Route path='/counselling' element={<Counselling />} />
              <Route path='/counselling/:index' element={<CounsellingReg />} />
              <Route path='/course/:index' element={<Course />} />
              {/* user */}
              <Route path='' element={<Dashboard />} >
                <Route path='/logout' element={<Logout />} />
                <Route path='/user/profile' element={<Profile />} />
                <Route path='/user/mycourse' element={<EnrollCourse />} />
                <Route path='/user/notification' element={<Notification />} />
                <Route path='/user/contact' element={<Contact />} />
              </Route>
            </Route>
            {/* Authontication */}
            <Route path="" element={<Loginmodule />} >
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            {/* MCQ 1 */}
            <Route path="" element={<McqHome />} >
              <Route path="/test" element={<Tests />} />
              <Route path="/result" element={<Result />} />
            </Route>
            {/* MCQ 2 */}
            <Route path="" element={<McqHometwo />} >
              <Route path="/testtwo" element={<Teststwo />} />
              <Route path="/resulttwo" element={<Resulttwo />} />
            </Route>
            {/* MCQ 3 */}
            <Route path="" element={<McqHomethree />} >
              <Route path="/testthree" element={<Teststhree />} />
              <Route path="/resultthree" element={<Resultthree />} />
            </Route>
            {/* MCQ 4 */}
            <Route path="" element={<McqHomefour />} >
              <Route path="/testfour" element={<Testsfour />} />
              <Route path="/resultfour" element={<Resultfour />} />
            </Route>


            <Route path="/ContextApp" element={<ContextApp />} ></Route>

          </Routes>
        </Toast>
      </UploadImage>
    </BrowserRouter>
  )
}
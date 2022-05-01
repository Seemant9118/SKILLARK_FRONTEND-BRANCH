import React, { useEffect, useState } from 'react';
import PrivateData from './data/PrivateData';
import Axios from "axios";
import img1 from './img/banner-aws.png';
import img2 from './img/banner-reactjs.png';
import img3 from './img/banner-devops.png';
import Card from './Card';
import Cards from '../common/Cards';
import CourseData from './data/CourseData';
import IMG from './img/style/card-banner.png';


export default function Courses() {
  const [courseData, setCourseData] = useState([]);
  useEffect(() => {
    Axios.get(`${PrivateData.IP}/course/cards`)
      .then((res) => {
        // handle success
        setCourseData(res.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
  }, []);
  console.log(courseData);
  return (
    <div>
      <div id="carouselForRecentCourse" className="carousel carousel-dark slide" data-bs-ride="carousel" style={{ width: '100%' }}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselForRecentCourse" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselForRecentCourse" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselForRecentCourse" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item">
            <div style={{ width: '100vw' }}>
              <img src={img1} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-caption d-none d-md-block ska-glass ska-carousel">
              <h3>{CourseData[0].title}</h3>
              <p>{CourseData[0].desc}</p>
            </div>
          </div>
          <div className="carousel-item active">
            <div style={{ width: '100vw' }}>
              <img src={img2} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-caption d-none d-md-block ska-glass ska-carousel">
              <h3>{CourseData[1].title}</h3>
              <p>{CourseData[1].desc}</p>
            </div>
          </div>
          <div className="carousel-item">
            <div style={{ width: '100vw' }}>
              <img src={img3} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-caption d-none d-md-block ska-glass ska-carousel">
              <h3>{CourseData[2].title}</h3>
              <p>{CourseData[2].desc}</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselForRecentCourse" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselForRecentCourse" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* <div className="row mx-5  text-center px-5">
        <div className='h1 title text-ska-primary-dark'>Courses</div>
        {CourseData.map((item, index) => {
          return (
            <Card
              id={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
              item={item}
              key={index} />
          )
        })}
      </div> */}

      <div style={{
        background: `linear-gradient( 135deg,rgba( 3, 133, 120, 0.349),rgba( 3, 133, 120, 0.567)), url(${IMG}), no-repeat, 50%, 50%`,
        backgroundSize: 'cover',
        height: '550px',
        width: '100 %',
        boaderRadius: '10px'
      }} className='px-5'>
        <div className='h1 title text-ska-primary-dark text-center pt-3'>Courses</div>
        <Cards data={CourseData} />
      </div>
      <hr />

    </div>
  )
}

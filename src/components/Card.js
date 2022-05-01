import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props) {
  return (
    <div className="col-md-3 col-sm-6 my-3 px-4 home-feature">
      <div className="card p-0 border-2">
        <img className='card-img-top' src={props.img} alt={props.img}/>
        {/* // style={{height:'200px' , overflow:'hidden'}}></img> */}
        <div className="card-body bg-ska-primary-light">
          <h5 className='card-title text-white'
          style={{height:'50px' , overflow:'hidden'}}>{props.title}</h5>
          <p className='card-text text-ska-secondary'
          style={{maxHeight:'70px' , overflow:'hidden'}}
          >{props.desc}</p>
          <p className='fw-bolder'>Price: ₹.{props.price}</p>
          <Link className="btn btn-ska-secondary" 
          to={`/course/${props.id}`}>Enroll Now</Link>
        </div>
      </div>
    </div>
  );
}

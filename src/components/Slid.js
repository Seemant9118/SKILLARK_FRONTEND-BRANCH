import React, { useEffect, useState } from 'react';
import PrivateData from './data/PrivateData';
import Axios from "axios";
import { Link } from 'react-router-dom';

export default function Slid(props) {
    const [slidData, setSlidData] = useState([]);
    useEffect(() => {
        Axios.get(`${PrivateData.IP}/instructor/cards`)
            .then((res) => {
                // handle success
                setSlidData(res.data);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            })
    }, []);
    const removeActive = () => {
        var div = document.querySelectorAll(".section");
        div.forEach((value, index) => {
            div[index].classList.remove('active')
        });
    }
    const addActive = (n) => {
        var div = document.querySelectorAll(".section");
        removeActive();
        div[n].classList.add('active');
        addActiveboxdesc(n);
        addActivebox(n)
    }

    // description
    const removeActiveboxdesc = () => {
        var boxdesc = document.querySelectorAll(".boxdesc");
        boxdesc.forEach((value, index) => {
            boxdesc[index].classList.remove('boxdesc_active')
        });
    }
    const addActiveboxdesc = (n) => {
        var boxdesc = document.querySelectorAll(".boxdesc");
        removeActiveboxdesc();
        boxdesc[n].classList.add('boxdesc_active')
    }

    // box
    const removeActivebox = () => {
        var box = document.querySelectorAll(".box");
        box.forEach(function (value, index) {
            box[index].classList.remove('box_active')
        });
    }
    const addActivebox = (n) => {
        var box = document.querySelectorAll(".box");
        removeActivebox();
        box[n].classList.add('box_active')
    }


    // default Active
    setTimeout(() => addActive(1), 1000)
    return (
        <div className='d-none d-lg-block mt-3 p-3'>
            <div className='h1 text-center text-ska-primary'>Our Top Rated Instructors</div>
            <div className="main">
                {slidData.map((item, index) => {
                    return (<div className={`section section${index}`} onMouseEnter={() => { addActive(index) }}>
                        <h2>{item.name}</h2>
                        <div className="box">
                            <p>{item.course.name}</p>
                            <Link className="btn btn-ska-secondary"
                                to={{
                                    pathname: `/course/${item.course.code}`,
                                    state: `${item.course.code}`
                                }}>Enroll Now</Link>
                        </div>
                        <div className="boxdesc">
                            {item.designation}<br />
                            {item.description}
                        </div>
                        <img style={{ borderTopLeftRadius: '20px' }}
                            className="inst_img " src={item.image} alt='instructorImage' />
                    </div>)
                })}
            </div>
        </div>);
}

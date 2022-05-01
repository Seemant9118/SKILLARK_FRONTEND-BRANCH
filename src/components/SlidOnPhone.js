import React, { useEffect, useState } from 'react';
import PrivateData from './data/PrivateData';
import Axios from "axios";
import { Link } from 'react-router-dom';

export default function SlidOnPhone(props) {
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
        var div = document.querySelectorAll(".sectionP");
        div.forEach((value, index) => {
            div[index].classList.remove('P_active')
        });
    }
    const addActive = (n) => {
        var div = document.querySelectorAll(".sectionP");
        removeActive();
        div[n].classList.add('P_active');
        addActiveboxdesc(n);
        addActivebox(n)
    }

    // description
    const removeActiveboxdesc = () => {
        var boxdesc = document.querySelectorAll(".boxdescP");
        boxdesc.forEach((value, index) => {
            boxdesc[index].classList.remove('boxdesc_activeP')
        });
    }
    const addActiveboxdesc = (n) => {
        var boxdesc = document.querySelectorAll(".boxdescP");
        removeActiveboxdesc();
        boxdesc[n].classList.add('boxdesc_activeP')
    }

    // box
    const removeActivebox = () => {
        var box = document.querySelectorAll(".boxP");
        box.forEach(function (value, index) {
            box[index].classList.remove('box_activeP')
        });
    }
    const addActivebox = (n) => {
        var box = document.querySelectorAll(".boxP");
        removeActivebox();
        box[n].classList.add('box_activeP')
    }


    // default Active
    setTimeout(() => addActive(1), 1000)
    return (
        <div className=' d-sm-block d-lg-none mt-3 p-3'>
            <div className='row align-items-center justify-content-center m-0'>
                <div className='h1 text-center text-ska-primary'>Our Top Rated Instructors</div>
                <div className="col-md-8 col-sm-12">
                    {slidData.map((item, index) => {
                        return (<div className={`sectionP sectionP${index}`}
                            onMouseEnter={() => { addActive(index) }}>
                            <h2>{item.name}</h2>
                            <div className='boxP'>
                                <p>{item.course.name}</p>
                                <Link className="btn btn-ska-secondary"
                                    to={{
                                        pathname: `/course/${item.course.code}`,
                                        state: `${item.course.code}`
                                    }}>Enroll Now</Link>
                            </div>
                            <div class="boxdescP">
                                {item.designation}<br />
                                {item.description}
                            </div>
                            <img style={{ borderTopLeftRadius: '20px' }}
                                className="inst_imgP" src={item.image} alt='instructorImage' />
                        </div>)
                    })}
                </div>
            </div>
        </div>);
}

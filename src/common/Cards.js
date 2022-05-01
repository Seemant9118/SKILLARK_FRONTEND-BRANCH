import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2, itemsToScroll: 2 },
    { width: 730, itemsToShow: 3 },
    { width: 986, itemsToShow: 4 }
];
export default function Cards(props) {
    return (
        <Carousel breakPoints={breakPoints}>
            {props.data.map((item, index) =>
                <div className="ska-box text-center">
                    <img style={{ height: '200px', overflow: 'hidden' }} src={item.img} alt={item.img} />
                    <h5 className='card-title text-ska-primary'>{item.title}</h5>
                    <p className='card-text'>{item.desc.substr(0, 10)}</p>
                    <p className='fw-bolder text-ska-primary-dark'>Price: ₹.{item.price}</p>
                    <Link className="btn btn-ska-secondary"
                        to={{
                            pathname: `/course/${item.id}`,
                            state: `${item.id}`
                        }}>Enroll Now</Link>
                </div>
            )}
        </Carousel>
    );
}

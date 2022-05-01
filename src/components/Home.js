import React from 'react';
import Slid from './Slid';
import SlidOnPhone from './SlidOnPhone';
import SlidData from './data/SlidData';
import Capture2 from './img/style/Capture2.png';
import Capture3 from './img/style/Capture3.png';
import homeCard1 from './img/style/homeCard1.png'
import homeCard2 from './img/style/homeCard2.png'
import homeCard3 from './img/style/homeCard3.png'
import EventPNG from './img/style/event.png'
// import EventPNG from './img/style/event.png'
import Typewriter from 'typewriter-effect';
import HomeCard from './HomeCard';
import PopUp from '../context/PopUp';

export default function Home() {


    return (
        <>
            <PopUp
                img={EventPNG}
                price='199'
                title='Three Days Cloud BootCamp'
                para='Register Now for 3 Day Workshop Hosted by Skillark on the Topic
            of Cloud Platform (AWS/Azure), this Workshop will cover all the
            Basic Services Of both Azure and AWS'
            />
            <div className='row align-items-center justify-content-center m-0'>
                <div className='col-md-4 col-6 order-md-5'>
                    <img className='float-end top-banner' src={Capture3}  alt='icon'/>
                </div>
                <div className=' col-md-3 order-md-3'>
                    <img className='d-none d-xl-block float-end' style={{ height: "250px" }}
                        src={Capture2}  alt='icon'/>
                </div>
                <div className='col-md-4 col-6  order-md-1'>
                    <div className='display-2 fw-bold text-center text-ska-primary'>
                        #boost your
                        <Typewriter
                            options={{
                                strings: ['Skills'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className='row align-items-center justify-content-center m-0'>
                <div className='col-lg-5 col-10 ska-box '>
                    <HomeCard
                        heading='Industry Experts Designed Trainings'
                        para='Trainings have been designed to cover not only the fundamentals but also to address the industry issues and bridge the college - industry gap.'
                        img={homeCard1}
                    />
                </div>
                <div className='col-lg-5 col-10 ska-box '>
                    <HomeCard
                        heading='Weekends Live Classes'
                        para='Highly interactive live classes on every weekend to make sure you dont get stuck.'
                        img={homeCard2}
                    />
                </div>
                <div className='col-lg-5 col-10 ska-box '>
                    <HomeCard
                        heading='Career Assistance'
                        para='To help you get started in the industry.'
                        img={homeCard3}
                    />
                </div>
                <div className='col-lg-5 col-10 ska-box '>
                    <HomeCard
                        heading='One to One Interaction'
                        para='You get a chance to directly interact with your instructors/counsellors'
                        img={EventPNG}
                    />
                    <div className='h2 text-ska-primary'>

                    </div>
                    <div className=''>
                    </div>
                </div>

            </div>
            <Slid SlidData={SlidData} />
            <SlidOnPhone SlidData={SlidData} />
        </>);
}

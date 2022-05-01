import React from 'react'
import Child from './Child'
import PopUp from './PopUp'
import Toast from './Toast'
import EventPNG from '../components/img/style/event.png'


export default function ContextApp() {
    return (<>
        <Toast>


            <PopUp
                img={EventPNG}
                price='199'
                title='Three Days Cloud BootCamp'
                para='Register Now for 3 Day Workshop Hosted by Skillark on the Topic
                    of Cloud Platform (AWS/Azure), this Workshop will cover all the
                    Basic Services Of both Azure and AWS'
            />


            <Child />
        </Toast>
    </>
    )
}

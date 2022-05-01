import React, { useContext } from 'react'
import { uploadImgContext } from './skaContext'

export default function Child() {
    const a = useContext(uploadImgContext);
    const handleButton = () => {
        a.handlePopup();
        console.log(a.awsLink);
    }
    return (
        <div>
            Child
            <hr />
            <button className='btn btn-primary'
                onClick={handleButton}>click</button>
        </div>
    )
}

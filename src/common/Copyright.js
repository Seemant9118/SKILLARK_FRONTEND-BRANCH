import React from 'react';
import { Link } from 'react-router-dom';


export default function Copyright() {
    return (
        <div className='text-center fw-bold'>
            Copyright ©
            <Link to='/'> Skillark </Link>
            {new Date().getFullYear()}.
        </div>
    );
}


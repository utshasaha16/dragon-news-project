import moment from 'moment';
import logo from '../assets/logo.png'
import React from 'react';

const Header = () => {
    return (
        <div className='flex flex-col justify-center gap-3 py-4 items-center'>
            <div>
                <img className='w-[300px]' src={logo} alt="" />
            </div>
            <h2 className='text-gray-400 text-lg'>Journalism Without Fear or Favour</h2>
            <p className='text-xl font-medium'>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;
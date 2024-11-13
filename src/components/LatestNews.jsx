import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='bg-base-300 p-5 flex gap-3 items-center'>
            <p className='bg-[#D72050] text-base-100 px-3 py-1'>Latest</p>
            <Marquee pauseOnHover={true} className='space-x-10'>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, dolorum.</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, dolorum.</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, dolorum.</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;
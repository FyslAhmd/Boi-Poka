import React from 'react';
import bannerImg from '../../assets/pngwing2.png';

const Banner = () => {
    return (
        <div className='bg-gray-200 rounded-lg my-10 flex justify-around items-center px-30 py-20'>
            <div className='max-w-[300px]'>
                <h1 className='text-3xl font-bold'>Books to freshen up your bookshelf</h1>
                <button className='btn bg-green-700 text-white mt-10'>View The List</button>
            </div>
            <div>
                <img className='' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
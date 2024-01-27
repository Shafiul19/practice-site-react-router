import React from 'react';

import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Topic = ({categori}) => {
   const {logo,name,id} = categori;
    return (
        <div className='border rounded-xl shadow-lg w-80 p-2'>
           
           <div className='w-full'>
                <img src={logo} alt="" /> 
            </div>
            <div className='flex justify-between items-center mt-2'>
                <p className='font-semibold'>{name}</p>
                <Link to = {`/quize/${id}`} className='flex items-center bg-sky-500 w-32 pl-2 rounded-sm text-white'>
                <span className='mr-2'>Start Practice</span> 
                <FaArrowRight></FaArrowRight>
                </Link>
             </div>
         
        </div>
    );
};

export default Topic;
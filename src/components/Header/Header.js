import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon,XMarkIcon } from '@heroicons/react/24/solid'
import pic from '../../images/examImage.jpeg'



const Header = () => {
    const [open,setOpen] = useState(false);
     return (
       <div>
         <nav className='max-w-screen-lg flex justify-between items-center md:justify-center px-4 mx-auto bg-red-800'>
        
         <span className='text-white md:hidden'>
            {
                open ? <XMarkIcon onClick = {()=> setOpen(!open)} className="h-6 w-6 text-white" /> 
                : <Bars3Icon onClick = {()=> setOpen(!open)} className="h-6 w-6 text-white" />
             }
            </span>
          
           <ul>
             
             <Link to = "/" className='text-2xl font-semibold mr-4 text-white'>Home</Link>
             
            
           </ul>
         
        </nav>

        <div className='flex justify-center items-center bg-cover  bg-center max-w-screen-lg mx-auto h-screen' style={{backgroundImage: `url(${pic})`,height: '450px'}}>
           
            <div className='text-white space-y-2'>
                <h1 className='text-3xl font-bold'>Welcome to my site</h1>
                <p>There are four topics in my  quize website. <br/> Such as js,css,react js, git <br/>
                These topics related with web design </p>
                <div className='flex justify-center items-center'>
                <button className='bg-orange-400 px-6 py-2 rounded-lg text-xl'>Get Started</button>
                </div>
            </div>
        </div>

       </div>
    );
};

export default Header;
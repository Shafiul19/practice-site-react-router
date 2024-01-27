import React from 'react';
// import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { ToastContainer} from 'react-toastify';

const Options = ({option,handleQuize}) => {
    console.log(option);
   
   
    return (
        <div className='flex items-center'>
            
                {/* <button onClick={handleQuize}><RiCheckboxBlankCircleLine></RiCheckboxBlankCircleLine></button> */}
             <p>
                <input type="radio" onClick={() => handleQuize(option)}/>
                <ToastContainer />
             </p>
                <p className='ml-2'><small>{option}</small></p>
            
        </div>
    );
};

export default Options;
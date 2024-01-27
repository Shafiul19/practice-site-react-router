import React from 'react';
import { TiEye } from "react-icons/ti";
import Options from '../Options/Options';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({item,idx}) => {
    console.log(item)
    
  
    const handleClick = () => {
        toast('Correct Answer: '+ item.correctAnswer)
    }

    const handleQuize = option => {
        if(option === item.correctAnswer){
            toast('Correct Answer')
        }
        else{
            toast('Wrong Answer')
        }
    }
    return (
        <div className='w-1/2 mx-auto rounded-xl p-4 shadow-lg mb-4'>
            
            <div className='flex justify-between items-center'>
                <p>Quize {idx + 1}: {item.question}</p>
                <button onClick={handleClick}><TiEye></TiEye></button>
                <ToastContainer />
            </div>
            <div>
                {
                   item.options.map((option,idx) => <Options
                   key={idx}
                   option = {option}
                   handleQuize = {handleQuize}
                   ></Options>) 
                }
            </div>
        </div>
    );
};

export default Questions;
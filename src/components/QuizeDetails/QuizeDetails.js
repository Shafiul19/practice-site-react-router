import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizeDetails = () => {
    const QuizeInfo = useLoaderData();
    console.log(QuizeInfo.data.questions)
    return (
        <div className='max-w-screen-lg mx-auto text-center mt-8 font-bold text-pink-950'>
            <h2 className='text-3xl'>Quize of {QuizeInfo.data.name}.</h2>

            {
               QuizeInfo.data.questions.map((item,idx) => <Questions
               key={item.id}
               item = {item}
               idx = {idx}
               ></Questions>) 
            }

        </div>
    );
};

export default QuizeDetails;
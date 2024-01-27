import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Home = () => {
    const categories = useLoaderData();
    console.log(categories.data)
    return (
        <div className='max-w-screen-lg mx-auto'>
            
            <div className='grid md:grid-cols-3 gap-4'>
                {
                    categories.data.map(categori => <Topic
                    key={categori.id}
                    categori = {categori}
                    ></Topic>)
                }
            </div>
        </div>
    );
};

export default Home;
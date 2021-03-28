import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import Categories from '../Categories/Categories';
import './Home.css'
const Home = () => {
    const category = useContext(CategoryContext);
    return (
        <div className= 'home'>
            <h1>This is Home: {category}</h1>
            <Categories></Categories>
        </div>
    );
};

export default Home;
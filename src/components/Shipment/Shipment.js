import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import './Shipment.css'
const Shipment = (props) => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h1>This shipment: {category}</h1>
            <button onClick={() => setCategory(category + 1)}>Increment from category</button>
        </div>
    );
};

export default Shipment;
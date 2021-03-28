import React, { useContext } from 'react';
import { CategoryContext } from '../../App';
import './CategoryDetails.css'
const CategoryDetails = (props) => {

    const category = useContext(CategoryContext);
    const { name } = props.product;
    return (
        <div>
            <h4>This is your category details</h4>
            <h6>Selected product: {name}</h6>
        </div>
    );
};

export default CategoryDetails;
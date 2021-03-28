import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';
import './Categories.css';

const allProducts = [
    { name: 'Lenevo', category: 'laptop' }, { name: 'Asus', category: 'laptop' }, { name: 'Apple', category: 'laptop' },
    { name: 'Samsung', category: 'mobile' }, { name: 'Motorola', category: 'mobile' }, { name: 'OnePlus', category: 'mobile' },
    { name: 'Canon', category: 'camera' }, { name: 'Nikon', category: 'camera' }, { name: 'Sony', category: 'camera' }
];
const Categories = () => {
    const [category, setCategory] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const matchedProducts = allProducts.filter(pd => pd.category === category);
        setProducts(matchedProducts);
    }, [category])
    return (
        <div>
            <h2>Selected category: {category}</h2>
            {
                products.map(pd => <CategoryDetails product={pd}></CategoryDetails>)
            }
        </div>
    );
};

export default Categories;
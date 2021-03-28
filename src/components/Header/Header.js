import { useContext } from 'react';
import { CategoryContext } from '../../App';
import './Header.css';
const Header = () => {


    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h1>This is header: {category}</h1>
            <button onClick={() => setCategory('laptop')}>Laptop</button>
            <button onClick={() => setCategory('mobile')}>Mobile</button>
            <button onClick={() => setCategory('camera')}>Camera</button>
        </div>
    );
};

export default Header;
import QuantityPicker from './quantityPicker';
import "./product.css";
import { useState } from 'react';


const Product = (props) => {
    const [quantity, setQuantity] = useState(1);

    const onQuantityChange = (value) => {

        console.log("qnty changed", value);
        setQuantity(value);
    };

    const getTotal = () => {

        let total = quantity * props.data.price;
        return "$" + total.toFixed(2);
    }

    return(
        <div className="product">
        
            <h5>{props.data.title}</h5>
            <img src={"./images/" + props.data.img} alt="Product"/>

            <div className="price-info">

                <label className="total">{getTotal()}</label>
                <label className="price">${props.data.price.toFixed(2)}</label>
            </div>


            <QuantityPicker onChange={onQuantityChange} /> 
        </div>

    );  
};

export default Product;
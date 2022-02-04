import QuantityPicker from './quantityPicker';
import "./product.css"


const Product = (props) => {

    return(

        <div className="product">
        
            <h5>{props.data.title}</h5>
            <img src={"./images/" + props.data.img} alt="Product"/>

            <div className="price-info">

                <label className="total"></label>
                <label className="price">${props.data.price}</label>
            </div>


            <QuantityPicker /> 
        </div>

    );  
};

export default Product;
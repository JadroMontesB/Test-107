import { useEffect, useState} from "react";
import Product from "./product";
import DataService from "../service/dataService";


const Catalog = () => {

    const [products, setProducts] = useState([]);

    const loadData = () => {

        console.log("component loaded");
        
        let service = new DataService();
        let data = service.getCatalog();
        setProducts(data);
        
    }

    useEffect(() => {

        loadData();

    });

    return(

        <div className="catalog">

            
            <h5>There are {products.length} products</h5>
            {console.log("component rendered")}

            {products.map((p) => (
            
            <Product key={p._id} data={p} />
            
            ))}
            
        </div>

    );
};

export default Catalog;
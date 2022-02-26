import './home.css'
import { Link } from 'react-router-dom';
import Catalog from './catalog';

const Home = () => {

    return(

        <div className="home">

            <h1>Example</h1>
            <Link className="btn btn info btn-lg" to="/catalog"> Go to the catalog</Link>

        </div>
    )
}

export default Home;
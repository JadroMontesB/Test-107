import "./navBar.css";
import { Link } from "react-router-dom";




function NavBar(){
    return(

        <div className="container">
            <nav className="navbar navbar-dark bg-dark">
                < div className="container-fluid">
                    <a className="navbar-brand" href="#">CryptoWorld🌎</a>

                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/home">Home Page</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/catalog">Catalog</Link>
                     </li>

                     <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                     </li>

                </div>
       
            </nav>
        </div>

    );
}

export default NavBar;
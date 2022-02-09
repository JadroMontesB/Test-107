import "./navBar.css";




function NavBar(){
    return(

        <div className="container">
            <nav className="navbar navbar-dark bg-dark">
                < div className="container-fluid">
                    <a className="navbar-brand" href="#">CryptoWorld🌎</a>

                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home Page</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">More Products</a>
                     </li>

                     <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                     </li>

                </div>
       
            </nav>
        </div>

    );
}

export default NavBar;
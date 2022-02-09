import './App.css';
import NavBar from "./components/navBar";
import Footer from './components/footer';
import Catalog from './components/catalog';
import Product from './components/product';
import Todo from "./components/todo";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import DataService from "./service/dataService";
import About from "./components/about";

function App() {
  return (
    <div className="App">
      <NavBar />

      <About />
      <h1>Welcome To CryptoWorld</h1>

      <Catalog />

      <Todo />
      <Footer />
    </div>
  );
}

export default App;

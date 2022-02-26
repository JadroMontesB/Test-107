import './App.css';
import NavBar from "./components/navBar";
import Footer from './components/footer';
import Catalog from './components/catalog';
import Home from "./components/home";
import Cart from "./components/cart";
import About from "./components/about";
import Admin from "./components/admin";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import Product from "./components/product";
import Todo from "./components/todo";
import DataService from "./service/dataService";

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>

        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

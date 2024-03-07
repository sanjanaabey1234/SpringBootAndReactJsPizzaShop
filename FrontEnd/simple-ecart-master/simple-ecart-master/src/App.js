import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useThemeHook } from './GlobalComponents/ThemeProvider';
import Header from './components/Header';
import { Router } from "@reach/router";

//Pages
import Cart from './Pages/Cart';
import ProductDetails from "./Pages/ProductDetails";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Dashboard from './Pages/Dashboard';
import About from "./Pages/About";
import MyAccount from "./Pages/MyAccount";
import Checkout from './Pages/Checkout';


function App() {
  const [theme] = useThemeHook();
  return (
    <main className={theme? 'bg-black': 'bg-light-2'} style={{ height: '100vh', overflowY: 'auto'}}>
      <Header/>
      <Router>
        <Dashboard path="/" />


        <Dashboard path="/" />
        <Home path="Menu" />
        <About path="About" />
        <Checkout path="Checkout" />


        <MyAccount path="my-account" />
        <Register path="register"/>
        <ProductDetails path="product-details/:productId"/>
        <Cart path="/cart" />
      </Router>
    </main>
  );
}

export default App;

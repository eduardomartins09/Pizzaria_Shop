import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { Provider } from "react-redux";
import store from "./store/store";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import Homepage from "./pages/Homepage/Homepage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import CartPage from "./pages/CartPage/CartPage";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>     
      <BrowserRouter>     
        <Navbar />
        <hr />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <hr />
        <Footer />       
      </BrowserRouter>    
    </Provider>
  </React.StrictMode>,
)
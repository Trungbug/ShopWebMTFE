import React, { useState } from 'react'
import './App.css'
import Products from './components/products/Products'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Navbar from './components/shared/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast'
import Cart from './components/cart/Cart'
import LogIn from './components/auth/LogIn'
import PrivateRoute from './components/PrivateRoute'
import Register from './components/auth/Register'
import Checkout from './components/checkout/Checkout'
import PaymentConfirmation from './components/checkout/PaymentConfirmation'
import AdminPage from './components/admin/Admin'
import ChangePassword from './components/profile/ChangePassword'; // Import component đổi mật khẩu
import OrderHistory from './components/profile/OrderHistory'; // Import component lịch sử đơn hàng
import Footer from './components/shared/Footer'
import Chatbot from './components/Chatbot'
function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />

          <Route path='/' element={<PrivateRoute />}>
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/order-confirm' element={<PaymentConfirmation />} />
            <Route path='/profile/order-history' element={<OrderHistory />} /> {/* Thêm route này */}
            <Route path='/change-password' element={<ChangePassword />} /> Thêm route này
          </Route>

          <Route path='/' element={<PrivateRoute publicPage />}>
            <Route path='/login' element={<LogIn />} />
            <Route path='/register' element={<Register />} />
          </Route>
          <Route path="/chatbot" element={<Chatbot />} /> {/* Thêm route này */}

          <Route path='/admin' element={<AdminPage />} />
        </Routes>
        <Footer />
        {/* <BackDrop /> */}
      </Router>
      {/* <Chatbot /> */}
      {/* <BackDrop /> */}
      <Toaster position='bottom-center' />
    </React.Fragment>
  )
}

export default App

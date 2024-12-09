import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import ProductListing from './screens/ProductListing';
import Checkout from './screens/Checkout';

function App() {

  return (
    <>
      <Link to='/'><h1>Home</h1></Link>
      <Link to='/ProductListing'><h1>Product Listing</h1></Link>
      <Link to='/Checkout'><h1>Checkout</h1></Link>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ProductListing' element={<ProductListing />} />
        <Route path='/Checkout' element={<Checkout />} />
      </Routes>
    </>
  )
}

export default App

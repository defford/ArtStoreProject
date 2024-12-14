import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Shop from './screens/Shop';
import Community from './screens/Community'
import About from './screens/About'
import Events from './screens/Events'
import ShoppingCart from './screens/ShoppingCart';
import Checkout from './screens/Checkout';
import Header from './screens/Header';
import Footer from './screens/Footer'
  
function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/community' element={<Community />} />
        <Route path='/about' element={<About />} />
        <Route path='/events' element={<Events />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/shopping-cart' element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

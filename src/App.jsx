import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Shop from './screens/Shop';
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
        <Route path='/checkout' element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

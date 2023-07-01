import './App.css';
import Home from './Component/Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';
import Product from './Component/Product/Product';
import Nav from './Component/Nav/Nav';
import Electronic from './Component/Electronic/Electronic';
import Productdetails from './Component/ProductDetails/ProductDetails';
import Jewellery from './Component/Jewellery/Jewellery';
import Mens from './Component/Mens/Mens';
import Womens from './Component/Womens/Womens';
import AddtoCart from './Component/AddtoCart/AddtoCart';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Product' element={<Product />}>
          <Route path="" element={<Navigate to="Electronic" />} />
          <Route path='Electronic' element={<Electronic />}></Route>
          <Route path='Jewellery' element={<Jewellery />}></Route>
          <Route path='Mens' element={<Mens />}></Route>
          <Route path='Womens' element={<Womens />}></Route>
        </Route>
        <Route path='/AddtoCart' element={<AddtoCart />}></Route>
        <Route path="/ProductDetails/:id" element={<Productdetails />} />

      </Routes>
    </div>
  );
}

export default App;

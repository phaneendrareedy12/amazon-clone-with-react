import { Route, Routes } from 'react-router-dom';
import './App.css';
import DisplayMobiles from './Components/DisplayMobiles/DisplayMobiles';
import DisplayProduct from './Components/DisplayMobiles/DisplayProduct/DisplayProduct';
import MainPage from './Components/HomePage/MainPage';
import NavBar from './Components/NavBar/NavBar';
import NavFooter from './Components/NavFooter/NavFooter';
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import ShoppingCartWithItems from './Components/ShoppingCart/ShoppingCartWithItems';

function App() {
  return (
    <div className="App">
      <NavBar />
      <NavFooter />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/mobiles' element={<DisplayMobiles />} />
        <Route path='/displayProdcut/:id' element={<DisplayProduct />} />
        <Route path='/checkout' element={<ShoppingCartWithItems />} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { Header } from "./components/Header";
import { ViewProducts } from "./pages/ViewProducts";
import {Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import { AddProduct } from "./pages/AddProduct";
import { EditProduct } from "./pages/EditProduct";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/view-products" element={<ViewProducts/>}/>
        <Route path="/add-product" element={<AddProduct/>}/>
        <Route path="/edit/id/:id" element={<EditProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;

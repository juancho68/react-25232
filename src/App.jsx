
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Nav } from './components/Nav/Nav';
import {ItemDetailsContainer } from './components/ItemDetailsContainer/ItemDetailsContainer'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { CartProvider } from './context/CartContext/CartProvider'
import { Cart } from "./components/Cart/Cart";
import { ProductFormContainer } from "./components/adminComponents/ProductFormContainer/ProductFormContainer";
import { MainLayout } from "./layouts/MainLayout";
import { AdminLayout } from "./layouts/AdminLayout";
import { RutaProtegida } from "./components/RutaProtegida/RutaProtegida";
import { Login } from "./components/Login/Login";


function App() {



  return (
    <>
    <BrowserRouter>
      <CartProvider>
          {/* <div> 
      <Header/> */}
          <Routes> 
            <Route element={<MainLayout/>}>
              <Route path="/" element={ <ItemListContainer titulo={"Wine Store"} /> } />
              <Route path="/category/:category" element={<ItemListContainer titulo={"Wine Store"} />} /> 
              <Route path="/detail/:id" element={ <ItemDetailsContainer/> } />
              <Route path="/carrito" element={<Cart/>} />
            </Route>
            
            <Route path="/admin" element={<AdminLayout/>}>
              <Route index element={<Login />} />

              <Route 
                  path="alta-productos"
                  element={
                    <RutaProtegida>
                      <ProductFormContainer/>
                    </RutaProtegida>
                  } 
                />
              </Route>


          </Routes>
      <Footer/>
      {/* </div> */}
      </CartProvider>
    </BrowserRouter> 
    </>
  )
}

export default App

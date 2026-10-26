import { Navbar } from "./components/Navbar"
import { CartProvider } from "./contexto/CartProvider"
import { BrowserRouter, Routes, Route } from 'react-router'
import { Cart } from './components/Cart'
import { Catalog } from "./components/Catalog"
import { AddItem } from './components/AddItem'

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Catalog />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/add" element={<AddItem />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}
export default App

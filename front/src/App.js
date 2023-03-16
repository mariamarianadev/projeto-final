import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Categorias from "./pages/Categorias";
import Home from "./pages/Home";
import Pedidos from "./pages/MeusPedidos";
import Produtos from "./pages/Produtos";
import "./index.css"
import DetalhesProduto from "./pages/DetalhesProduto";



export default function App(){
  return(

      <> 
        <BrowserRouter>

        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/meus-pedidos" element= {<Pedidos />} />
          <Route path="/produtos/:id" element= {<DetalhesProduto />} />
        </Routes>
        </BrowserRouter>
      </>
  )
}
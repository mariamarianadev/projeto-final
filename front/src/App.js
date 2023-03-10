import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./components/Menu";
import Navybar from "./components/Navybar";
import Categorias from "./pages/Categorias";
import Home from "./pages/Home";
import Pedidos from "./pages/MeusPedidos";
import Produtos from "./pages/Produtos";


export default function App(){
  return(

      <> 
        <BrowserRouter>

        <Navybar/>

        <Menu />

        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/produtos" element={<Pedidos />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/meus-pedidos" element= {<Pedidos />} />
        </Routes>
        </BrowserRouter>
      </>
  )
}
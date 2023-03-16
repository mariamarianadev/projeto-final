import {Button, TextField, Alert, Badge} from "@mui/material";
import {Favorite, Group, ShoppingCart} from "@mui/icons-material";

import "./styles.css";
import img from "./imgs/Vector.svg"
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            
           
            
            <p className="ds"><img src={img} />Digital Store</p>

                     
             
            <button className="entrar"> Entrar  </button>
            {/* <Button className="entrar" color="secondary" variant="contained">Entrar</Button> */}

            <TextField className="procura" label="Pesquisar produto..."/>

            <div  className="red">  
                <Badge color="primary" badgeContent={"4"}></Badge>
                <ShoppingCart/> 
            </div>
            <br/>
            <br/>
        </div>
    )
}
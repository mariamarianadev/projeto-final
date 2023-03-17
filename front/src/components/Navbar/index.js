import {Button, TextField, Alert, Badge, Stack, Typography} from "@mui/material";
import {Favorite, Group, ShoppingCart} from "@mui/icons-material";
import { createTheme } from '@mui/material/styles';

import "./styles.css";
import img from "./imgs/Vector.svg"
import { Link } from "react-router-dom";
import { grey, pink, purple } from "@mui/material/colors";
import { Container, width } from "@mui/system";

const theme = createTheme({
    palette: {
        primary: {
            main: '#C92071',
      },
      secondary: {
        main: '#C92071',
      },
    },
  });

export default function Navbar() {
    return (
       <div>
            <Container>
                <Stack direction="row" sx={{justifyContent: "space-between", alignItems: "center"}}>
                <p className="ds"><img src={img} />Digital Store</p>
                    <TextField label="O que vc procura" sx={{width: "500px"}}/>
                    <Stack direction="row" spacing={3} sx={{alignItems: "center"}}>
                        <Button variant="text" sx= {{color:grey[600]}}>Cadastre-se</Button>
                        <Button className="ent" variant="contained" sx={{backgroundColor: '#C92071', color: "white"}}>Entrar</Button>
                        <ShoppingCart sx={{color: '#C92071'}}/>
                    </Stack>
                
                </Stack>
               
            </Container>
            {/* <div  className="red">  
                 <Badge color="primary" badgeContent={"4"}></Badge>
                 <ShoppingCart/> 
             </div>     */}

         </div> 
    )


}
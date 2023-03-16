import React from 'react';
import {Card, Grid,Button, Rating, Fab} from "@mui/material"
import {useParams} from "react-router-dom"
import sapato1 from "./img/sapato01.png"
import sapato2 from "./img/sapato02.webp"
import sapato3 from "./img/sapato03.png"
import sapato4 from "./img/sapato04.png"
import sapato5 from "./img/sapato05.png"
import { ChevronLeft, ChevronRight, Star, StarOutline} from "@mui/icons-material"
import { Stack } from '@mui/system';
import "./styles.scss"
import Navbar from '../../components/Navbar';

export default function DetalhesProduto(){
    const {id} = useParams();
    const [atual, setAtual] = React.useState (0);
    const [color, setColor] = React.useState (0);
    

    const imagens = [
        sapato1, sapato2, sapato3, sapato4, sapato5,
    ];

    const Items = () => {
        return imagens.map((cada, posicao) => {
            return (
                <Grid item xs={2.4}>
                    <Card onClick={() => setAtual(posicao)} sx={(atual === posicao) && { border: "2px solid grey"}}>
                        <img src={cada} width="100%"/>
                    </Card>
                </Grid>
            );
        }); 
    }

    function anterior() {
        if (atual === 0) {
            setAtual( imagens.length - 1);
        }else{
            setAtual(atual -1);
        }
    }

    function proximo(){
        if (atual < imagens.length - 1){
                    setAtual( atual + 1);
        }else{
            setAtual(0)
        }
    }
    
    React.useEffect(() => {
        
        let intervalo = setInterval(proximo, 3000);
        
        return () => clearInterval(intervalo);
    });


    return(
       
        <div className="product-details">
             <Navbar/>
            Detalhe do produto {id}

            <Grid container spacing={3}>
                <Grid item xs={7}>
                    <Card align="center">
                        <Stack direction={"row"} sx={{justifyContent: "space-between", alignItems: "center"}}>
                            <ChevronLeft sx={{fontSize: "60px"}} onClick={anterior} /> 

                             <img width="400px" src={imagens[atual]} />
                             
                            <ChevronRight sx={{fontSize: "60px"}} onClick={proximo} />
                       </Stack>
                    </Card>
                    <Grid container spacing={2}>
                    <Items/>
                    </Grid>

                </Grid>

                <Grid item xs={5}>
                    <div className="title"> 
                        Tenis Vans 
                    </div>

                    <div className="ref">
                        Casual | Vans 
                    </div>

                    <div className="reviews">
                        {/* <Star/> 
                        <Star/> 
                        <Star/> 
                        <Star/> 
                        <StarOutline/>  */}
                        <Rating value= "4"/>
                    </div>
                    <div>
                        R$ 299,00

                    </div>
                    
                    <div>
                        <p>Descrição do produto </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>

                    </div>
                    
                    <div>
                        Tamanho

                    </div>
                    
                    <div>
                        Cor
                        <Fab sx={{width:"35px", height:"20px"}} onClick={() => setColor ('Azul')} color='primary'></Fab>
                        <Fab sx={{width:"35px", height:"20px"}} onClick={() => setColor ('Roxo')} color='secondary'></Fab>
                        <Fab sx={{width:"35px", height:"20px"}} onClick={() => setColor ('Verde')} color='success'></Fab>
                        <Fab sx={{width:"35px", height:"20px"}} onClick={() => setColor ('Vermelho')} color='error'></Fab>

                    </div>

                    <Button className='buy' variant="contained">COMPRAR  </Button>
                </Grid> 

            </Grid> 
            
        </div>
    )
}

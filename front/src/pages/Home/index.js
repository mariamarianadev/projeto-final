import { Container, Grid } from "@mui/material";
import Banner from "../../components/Banner";
import Carousel from "../../components/Carousel";
import ColecaodeDestaque from "../../components/ColecaodeDestaque";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import Produto from "../../components/Produto";
import React from 'react';


export default function Home(){

    const [listaProdutos, setListaProdutos] = React.useState([]);

    React.useEffect(() => {
      async function buscarProdutos(){
        let resposta = await fetch ("https://63388a25383946bc7fe9a891.mockapi.io/digital-store-users")

        
                        .then (res => res.json()) 
                        .then (lista => {
                          setListaProdutos(lista)
                        })
      }
  }, [] )

  return (
    <div>
       <Navbar />

      <Menu />
      <Container>
        <Grid container spacing={2} >
         
          <Grid item md={4}>
          <Banner />
          </Grid>

          <Grid item md={8}>
          <Carousel />
          </Grid>
         
        </Grid>
      
      </Container>

      <ColecaodeDestaque />
        
        <Container>
          <Grid container spacing={3}>
            {
              listaProdutos.map((cadaProduto) => {
                <Grid item md={3}> 
                    <Produto />
                 </Grid>
              })
            }

          </Grid> 

          </Container>
    
      
    </div>
)}

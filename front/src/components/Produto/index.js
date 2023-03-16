import { Paper } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import sapato from './produto.png';

export default function Produto(){
   
    return(
        <> 
        <Stack>
            <Paper elevation={2}>
                <img src={sapato} /> 
             </Paper> 
             <span>Categoria</span>
             <h4> Nome do produto</h4>
        </Stack>
        </>
    );

}
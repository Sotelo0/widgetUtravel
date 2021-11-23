import React from "react"
import { Grid } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const breadCrums = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="row"
      alignItems="center"
      justifyContent="center"
      style={{padding: "2em", backgroundColor:"#CCDAE3"}}
    >
      <Grid item sm={2}>
        <CheckCircleIcon /> Cotizador
      </Grid>
      <Grid item sm={2}>
        <CheckCircleIcon color={'primary'} /> Informacion
      </Grid>
      <Grid item sm={2}>
        <CheckCircleIcon color={'green'} /> Checkout
      </Grid>
    </Grid>
  )
}


export default breadCrums;
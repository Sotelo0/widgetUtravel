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
      style={{padding: "2em"}}
    >
      <Grid item sm={2}>
        <CheckCircleIcon /> <span className="cotiza-utravel">Cotizador</span>
      </Grid>
      <Grid item sm={2}>
        <CheckCircleIcon color={'primary'} /> <span className="cotiza-utravel">Información</span>
      </Grid>
      <Grid item sm={2}>
        <CheckCircleIcon color={'green'} /> <span className="cotiza-utravel">Checkout</span>
      </Grid>
    </Grid>
  )
}


export default breadCrums;
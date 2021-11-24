import React, { useEffect, useState } from "react";
import { Grid, Card } from "@mui/material";
import CardHeader from '@material-ui/core/CardHeader';
import { reactLocalStorage } from 'reactjs-localstorage';
import { TextField } from '@material-ui/core'
import Breadcrumb from '../../components/Breadcrum';
import axios from 'axios'


import Swal from "sweetalert2";

const DetalleDeProducto = () => {

  //useStates
  const [datas, setDatas] = useState([]);

  const [local, setLocal] = useState([]);
  useEffect(() => {

    if (reactLocalStorage.get('DDV')) {
      setLocal(JSON.parse(reactLocalStorage.get('DDV')));
    } else {
      let x = { "salida": "", "llegada": "", "Dsalida": "", "Dregreso": "", "total": 0, "types": [] }
      setLocal(x)
    }
  }, []);

  useEffect(()=>{
    let x = [local.types]
    x.map((i)=>{
      console.log('-------->', i)
    });
  });

  const DataPassager = () => {
    //nombre, fecha Nac., género,  email
    let passanger = []
    const [data, setData] = useState([]);

    for (let i = 0; i < local.passager; i++) {

      passanger.push(
        <Card variant={'outlined'} style={{ padding: "2em" }}>
          <Grid container spacing={2}>
            <Grid item sm="3">Datos del pasajero :</Grid>
            <Grid item sm={3}>

              <label for={`pasajero numero ${i + 1} Nombre`} >Nombre *</label>
              <input style={{width:"100%"}}  required="true" id={`pasajero numero ${i + 1} Nombre`} onChange={(e) => {
                let key = e.target.id;
                let value = e.target.value;
                setData({ ...data, [key]: value })

              }} ></input>
            </Grid>
            <Grid item sm={3}>
              <label for={`pasajero numero ${i + 1} Fecha de nacimiento`} >Fecha de nacimiento *</label>
              <input data-date-inline-picker="true"  style={{width:"100%"}}  placeholder="Fecha de nacimiento" required="true" type="date" helperText="Fecha de nacimiento" id={`pasajero numero ${i + 1} Fecha de nacimiento`} onChange={(e) => {
                let key = e.target.id;
                let value = e.target.value;
                setData({ ...data, [key]: value })

              }}></input  >

            </Grid>
            <Grid item sm={3}>
              <label for={`pasajero numero ${i + 1} Sexo`}>Sexo *</label>
              <select style={{width:"100%"}} required="true" helperText="Sexo" id={`pasajero numero ${i + 1} Sexo`} onChange={(e) => {
                let key = e.target.id;
                let value = e.target.value;
                setData({ ...data, [key]: value })

              }}>
                <option></option>
                <option>Masculino</option>
                <option>Femenino</option>
              </select>
            </Grid>
          </Grid>
        </Card >)
    }

    useEffect(() => {
      reactLocalStorage.set("dataPassager", JSON.stringify(data))
    })


    return passanger;
  }

  const createProduct = (e) => {
    e.preventDefault()
    axiosPet()
    // let swalWithBootstrapButtons = Swal.mixin({
    //   customClass: {
    //     confirmButton: 'btn btn-success',
    //     cancelButton: 'btn btn-danger'
    //   },
    //   buttonsStyling: false
    // })

    // swalWithBootstrapButtons.fire({
    //   title: '¡Asegurese de que los datos ingresados sean correctos!',
    //   text: "Procederemos a crear el producto!",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonText: 'Seguir',
    //   cancelButtonText: 'No, cancelar',
    //   reverseButtons: true
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     swalWithBootstrapButtons.fire(
    //       'Listo!',
    //       'Su producto esta listo.',
    //       'success'
    //     )
        
    //   }
    // })
  }

  const returning = () => {
    let swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    swalWithBootstrapButtons.fire({
      title: 'Volver a cotizador',
      text: "¡Volveremos a la pagina de inicio!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        redirecReturning()
      }
    })
  }

  const redirecReturning = () => {
    window.location.href = "/"
  }
  const axiosPet = () => {
    let dataPassager = reactLocalStorage.get('dataPassager')

    let dataPurific = dataPassager.replace(/\\/g, "").replace(/\}/g, "").replace(/\{/g, "").replace(/\"/g, "")

    var data = JSON.stringify({
      "quantity": 1,
      "name": "Seguro de viajero",
      "nameTranslated": {
        "en": "Seguro de viajero",
        "es": "Seguro de viajero"
      },
      "price": local.total,
      "compareToPrice": local.total,
      "isShippingRequired": false,
      "categoryIds": [],
      "weight": 10,
      "enabled": true,
      "description": dataPurific,
      "productClassId": 0,
      "created": "2014-01-01",
      "fixedShippingRateOnly": false,
      "fixedShippingRate": 1.2,
      "options": [
        {
          "type": "RADIO",
          "name": "Size",
          "nameTranslated": {
            "en": "Size",
            "es": "Tamaño"
          },
          "choices": [],
          "defaultChoice": 0,
          "required": false
        }
      ],
      "shipping": {
        "type": "SELECTED_METHODS",
        "methodMarkup": 0,
        "flatRate": 0,
        "disabledMethods": [
          "1396442138-1534946367952"
        ],
        "enabledMethods": []
      }
    });
    //https://panel.bilda.bar/site/ece4ebdd/ecommerce/Seguro-de-viajero-p419854125?nee=true&ed=true&showOriginal=true&preview=true&dm_try_mode=true&dm_checkSync=1&dm_device=desktop
    var config = {
      method: 'post',
      url: 'https://app.ecwid.com/api/v3/66828634/products?token=secret_82ymxuGscWx5n1C9Mr9vM1vxj3hhKGyf',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        redirect(response.data.id)
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  const redirect = (id) => {
    var config = {
      method: 'get',
      //
      //https://app.ecwid.com/api/v3/66828634/products/${id}?token=secret_82ymxuGscWx5n1C9Mr9vM1vxj3hhKGyf
      url: `https://panel.bilda.bar/site/ece4ebdd/ecommerce/${id}?nee=true&ed=true&showOriginal=true&preview=true&dm_try_mode=true&dm_checkSync=1&dm_device=desktop`,
      headers: {
        'Content-Type': 'application/json'
      },

    };

    axios(config)
      .then(function (response) {
        window.location.href = response.data.url
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  return (
    <>
      <Grid container spacing={3} style={{ padding: "1em" }}>
        <Grid item sm={12} >
          <Breadcrumb></Breadcrumb>
        </Grid>
        <Grid item sm={4} >
          <Card variant={"outlined"} style={{ padding: ".5em" }}>
            <p>Precio del seguro</p>
            <h1>$ {local.total}</h1>
          </Card>
        </Grid>
        <Grid item sm={7} >
          <Card style={{ padding: ".5em" }}>
            <p>Saliendo de :</p>
            <p>{local.salida}</p>
            <p>Llegando a :</p>
            <p>{local.llegada}</p>
            <p>Fecha de salida :</p>
            <p>{local.Dsalida}</p>
            <p>Fecha de regreso :</p>
            <p>{local.Dregreso}</p>

          </Card>
        </Grid>
        <Grid item sm={12}>
          <Card variant={"outlined"} style={{ padding: ".5em" }}>
            <Grid container style={{ padding: "2em", height: "50vh", overflowY: "scroll" }}>
              <Grid item sm={12} style={{ marginBottom: "2em" }}>
                <form onSubmit={createProduct}>
                  <DataPassager />

                  <Grid container>
                    <Grid item>
                      <button onClick={redirecReturning}>Volver</button>
                    </Grid>
                    <Grid item>
                      <input type="submit" value="Seguir" style={{color:"#000"}}></input>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>

          </Card>
        </Grid>
      </Grid>
    </>
  );


}


export default DetalleDeProducto;
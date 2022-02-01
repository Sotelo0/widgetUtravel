import React, { useEffect, useState } from "react";
import { Grid, Card } from "@mui/material";
import CardHeader from '@material-ui/core/CardHeader';
import { reactLocalStorage } from 'reactjs-localstorage';
import { TextField } from '@material-ui/core'
import Breadcrumb from '../../components/Breadcrum';
import axios from 'axios'
import Dialog from '@mui/material/Dialog';
import Swal from "sweetalert2";
const DetalleDeProducto = () => {
  //useStates
  const [datas, setDatas] = useState([]);
  const [local, setLocal] = useState([]);
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (reactLocalStorage.get('DDV')) {
      setLocal(JSON.parse(reactLocalStorage.get('DDV')));
    } else {
      let x = { "salida": "", "llegada": "", "Dsalida": "", "Dregreso": "", "total": 0, "types": [] }
      setLocal(x)
    }
  }, []);
  useEffect(() => {
    let x = [local.types]
    x.map((i) => {
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
          <Grid container spacing={4}>
            <Grid item sm={2}>Datos del pasajero :</Grid>
            <Grid item sm={2}>
              <label for={`pasajero numero ${i + 1} Nombre`} >Nombre *</label>
              <input style={{ width: "100%" }} required="true" id={`pasajero numero ${i + 1} Nombre`} onChange={(e) => {
                let key = e.target.id;
                let value = e.target.value;
                setData({ ...data, [key]: value })
              }} ></input>
            </Grid>
            <Grid item sm={6}>
              <Grid container spacing={2}>
                <Grid item sm={4}>
                  <label for={`pasajero numero ${i + 1}  D`} >Dia *</label>
                  <select id={`pasajero numero ${i + 1}  D`} required="true" onChange={(e) => {
                    let key = e.target.id;
                    let value = e.target.value;
                    setData({ ...data, [key]: value })

                  }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>


                  </select>
                </Grid>
                <Grid item sm={4}>
                  <label for={`pasajero numero ${i + 1}  M`} >Mes *</label>
                  <select id={`pasajero numero ${i + 1}  M`} required="true" onChange={(e) => {
                    let key = e.target.id;
                    let value = e.target.value;
                    setData({ ...data, [key]: value })

                  }}>
                    <option value="Enero">Enero</option>
                    <option value="Febrero">Febrero</option>
                    <option value="Marzo">Marzo</option>
                    <option value="Abril">Abril</option>
                    <option value="Mayo">Mayo</option>
                    <option value="Junio">Junio</option>

                    <option value="Julio">Julio</option>
                    <option value="Agosto">Agosto</option>
                    <option value="Septiembre">Septiembre</option>
                    <option value="Octubre">Octubre</option>
                    <option value="Noviembre">Noviembre</option>
                    <option value="Diciembre">Diciembre</option>

                  </select>
                </Grid>
                <Grid item sm={4}>
                  <label for={`pasajero numero ${i + 1}  A`} >Año *</label>
                  <select id={`pasajero numero ${i + 1}  A`} required="true" onChange={(e) => {
                    let key = e.target.id;
                    let value = e.target.value;
                    setData({ ...data, [key]: value })

                  }}>
                    <option value="1930">1930</option>
                    <option value="1931">1931</option>
                    <option value="1932">1932</option>
                    <option value="1933">1933</option>
                    <option value="1934">1934</option>
                    <option value="1935">1935</option>
                    <option value="1936">1936</option>
                    <option value="1937">1937</option>
                    <option value="1938">1938</option>
                    <option value="1939">1939</option>
                    <option value="1940">1940</option>
                    <option value="1941">1941</option>
                    <option value="1942">1942</option>
                    <option value="1943">1943</option>
                    <option value="1944">1944</option>
                    <option value="1945">1945</option>
                    <option value="1946">1946</option>
                    <option value="1947">1947</option>
                    <option value="1948">1948</option>
                    <option value="1949">1949</option>
                    <option value="1950">1950</option>
                    <option value="1951">1951</option>
                    <option value="1952">1952</option>
                    <option value="1953">1953</option>
                    <option value="1954">1954</option>
                    <option value="1955">1955</option>
                    <option value="1956">1956</option>
                    <option value="1957">1957</option>
                    <option value="1958">1958</option>
                    <option value="1959">1959</option>
                    <option value="1960">1960</option>
                    <option value="1961">1961</option>
                    <option value="1962">1962</option>
                    <option value="1963">1963</option>
                    <option value="1964">1964</option>
                    <option value="1965">1965</option>
                    <option value="1966">1966</option>
                    <option value="1967">1967</option>
                    <option value="1968">1968</option>
                    <option value="1969">1969</option>
                    <option value="1970">1970</option>
                    <option value="1971">1971</option>
                    <option value="1972">1972</option>
                    <option value="1973">1973</option>
                    <option value="1974">1974</option>
                    <option value="1975">1975</option>
                    <option value="1976">1976</option>
                    <option value="1977">1977</option>
                    <option value="1978">1978</option>
                    <option value="1979">1979</option>
                    <option value="1980">1980</option>
                    <option value="1981">1981</option>
                    <option value="1982">1982</option>
                    <option value="1983">1983</option>
                    <option value="1984">1984</option>
                    <option value="1985">1985</option>
                    <option value="1986">1986</option>
                    <option value="1987">1987</option>
                    <option value="1988">1988</option>
                    <option value="1989">1989</option>
                    <option value="1990">1990</option>
                    <option value="1991">1991</option>
                    <option value="1992">1992</option>
                    <option value="1993">1993</option>
                    <option value="1994">1994</option>
                    <option value="1995">1995</option>
                    <option value="1996">1996</option>
                    <option value="1997">1997</option>
                    <option value="1998">1998</option>
                    <option value="1999">1999</option>
                    <option value="2000">2000</option>
                    <option value="2001">2001</option>
                    <option value="2002">2002</option>
                    <option value="2003">2003</option>
                    <option value="2004">2004</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                    <option value="2011">2011</option>
                    <option value="2012">2012</option>
                    <option value="2013">2013</option>
                    <option value="2014">2014</option>
                    <option value="2015">2015</option>
                    <option value="2016">2016</option>
                    <option value="2017">2017</option>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    
                  </select>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sm={2} >
              <label for={`pasajero numero ${i + 1} Sexo`}>Sexo *</label>
              <select style={{ width: "100%" }} required="true" helperText="Sexo" id={`pasajero numero ${i + 1} Sexo`} onChange={(e) => {
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
    console.log(dataPurific)

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
        setImage(response.data.id)
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const redirect = (id) => {
    window.location.href = `https://panel.bilda.bar/site/ece4ebdd/ecommerce/Seguro-de-viajero-p${id}?preview=true&nee=true&showOriginal=true&dm_checkSync=1&dm_try_mode=true&dm_device=desktop`
  }
  const redirects = (id) => {
    var config = {
      method: 'get',
      url: `https://app.ecwid.com/api/v3/66828634/products/${id}?token=secret_82ymxuGscWx5n1C9Mr9vM1vxj3hhKGyf`,
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
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

//https://app.ecwid.com/api/v3/66828634/products/439498593/image?token=secret_82ymxuGscWx5n1C9Mr9vM1vxj3hhKGyf&externalUrl=https://irp.cdn-website.com/ece4ebdd/dms3rep/multi/Utravel+mx.png
  const setImage = (id) => {
    var config = {
      method: 'post',
      url: `https://app.ecwid.com/api/v3/66828634/products/${id}/image?token=secret_82ymxuGscWx5n1C9Mr9vM1vxj3hhKGyf&externalUrl=https://irp.cdn-website.com/ece4ebdd/dms3rep/multi/Utravel+mx.png`,
      headers: {
        'Content-Type': 'image/png'
      }
    };

    axios(config)
      .then(function (response) {
        redirect(response.data.id)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <Grid container spacing={3} style={{ padding: "1em" }}>

        <Grid item xs={12}>
          <div className="imgBack"></div>
        </Grid>
        <Grid item sm={12} >
          <Breadcrumb></Breadcrumb>
          <p className="copys">Gracias por cotizar tu seguro</p>
        </Grid>
        <Grid item sm={4} >
          <Card variant={"outlined"} style={{ padding: ".5em" }}>
            <p>Precio del seguro</p>
            <h1>$ {local.total}</h1>
          </Card>
        </Grid>

        <Grid item sm={7} >
          <Card style={{ padding: ".5em" }}>
            <div className="fechas-utravel">
              <p className="lugar-utravel">Saliendo de :</p>
              <p className="luocal-utravel">{local.salida}</p>
              <p className="lugar-utravel">Llegando a :</p>
              <p className="luocal-utravel">{local.llegada}</p>
            </div>
            <div className="fechas-utravel-01">
              <p className="lugar-utravel">Fecha de salida :</p>
              <p className="luocal-utravel">{local.Dsalida}</p>
              <p className="lugar-utravel">Fecha de regreso :</p>
              <p className="luocal-utravel">{local.Dregreso}</p>
            </div>
          </Card>
        </Grid>
        <Grid item sm={12}>
          <p className="copys">Para continuar y poder contratar tu seguro  llena los datos (del) o (los) pasajeros</p>
          <Card variant={"outlined"} style={{ padding: ".5em" }}>
            <Grid container style={{ padding: "2em", height: "50vh", overflowY: "scroll" }}>
              <Grid item sm={12} style={{ marginBottom: "2em" }}>
                <form onSubmit={createProduct}>
                  <DataPassager />
                  <Grid container>
                    <div className="botones-utravel">
                      <div className="volver-utravel">
                        <Grid item sm={6}>
                          <button onClick={redirecReturning}>Volver</button>
                        </Grid>
                      </div>
                      <div className="seguir-utravel">
                        <Grid item sm={6}>
                          <input type="submit" value="Continuar" style={{ color: "#000" }}></input>
                        </Grid>
                      </div>
                    </div>
                    <Grid item sm={12}>
                      <p className="copys">Con nuestra cobertura te protegemos para que viajes tranquilo y sin preocupaciones.</p>
                      <Grid item sm={6}>
                        <div className="seguir-cobertura">
                          <input type="button" value="Ver cobertura" />
                        </div>
                      </Grid>
                      <Dialog open={open} width={700} style={{ backgroundColor: "#000" }} onClose={handleClose}>
                        <iframe style={{ width: "100%", height: "100vh" }} src="https://irp.cdn-website.com/ece4ebdd/files/uploaded/Poliza.pdf"></iframe>
                      </Dialog>
                      {/* <a onClick={handleClickOpen}>Cobertura</a> */}
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
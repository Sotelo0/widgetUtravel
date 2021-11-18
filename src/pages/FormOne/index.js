import React, { useEffect, useState } from "react"
import { reactLocalStorage } from 'reactjs-localstorage';

//Componentes de Material UI
import { Grid } from "@mui/material"
import Swal from "sweetalert2";
//componentes propios
import Select from '../../components/Selection'
import DatePiker from "../../components/DatePiker"
import { TextField } from '@material-ui/core'
import moment from "moment"

const FormOne = ({ url }) => {

    //-----------------------UseStates-------------------
    const [placeFrom, setPlaceFrom] = useState('') //Lugar de salida
    const [placeOf, setPlaceOf] = useState('') //Lugares de llegada
    const [dayStart, setDayStart] = useState('') //dia de salida
    const [dayEnd, setDayEnd] = useState('') // dia de regreso
    const [passager, setPassager] = useState({ a: '', b: '', c: '' }) //pasageros

    //-----------------------Constantes-------------------
    const placesFrom = ['México']
    const placesOf = ['México', 'USA', 'Canadá', 'Europa', 'Resto del mundo']
    const prices = [
        0,
        299.00,
        415.00,
        531.00,
        647.00,
        763.00,
        879.00,
        999.00,
        1117.00,
        1235.00,
        1353.00,
        1471.00,
        1589.00,
        1707.00,
        1998.00,
        2118.00]

    //-----------------------Funciones-------------------

    let a = passager.a? a : 0
    

    const calculate = () => {
        let endValue = 0;
        let childrens = children();
        let day = calculateDay()
        let grandparents = grandparent();
        let value = grandparents + childrens
        endValue = value + (prices[day] * passager.a)
        let jsonsData = {
            "salida": placeFrom,
            "llegada": placeOf,
            "Dsalida": dayStart,
            "Dregreso": dayEnd,
            "total": endValue,
            "passager": parseInt(passager.a? passager.a : 0) + parseInt(passager.b? passager.b : 0) + parseInt(passager.c? passager.c : 0)
        }

        let timerInterval
        Swal.fire({
            title: 'Estamos creando tu paquete!',
            html: '',
            timer: 500,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading()
                const b = Swal.getHtmlContainer().querySelector('b')
                timerInterval = setInterval(() => {
                    // b.textContent = Swal.getTimerLeft()
                }, 50)
            },
            willClose: () => {
                clearInterval(timerInterval)
                window.location.href = url;

            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                reactLocalStorage.set('DDV', JSON.stringify(jsonsData))
            }
        })
    }

    const children = () => {
        let valueChild = 0
        let day = calculateDay()
        if (passager.b > 0 && !passager.a && !passager.c) {
            valueChild = prices[day] * passager.b
        } else {
            if (passager.a !== null && passager.c !== null && passager.b <= 2) {
                valueChild = 0;
            } else if (passager.a !== null && passager.b > 2) {
                valueChild = prices[day] * passager.b
            } else {
                valueChild = passager.a
            }
        }
        return valueChild
    }

    const grandparent = () => {
        let value = 0
        let day = calculateDay()
        let plus = prices[day] * passager.c

        value = plus + (plus * .5);
        return value
    }

    const calculateDay = () => {
        if (dayStart !== '' && dayEnd !== '') {
            var fecha1 = moment(dayStart)
            var fecha2 = moment(dayEnd)
            //console.log(fecha2.diff(fecha1, 'days'), ' dias de diferencia') 
            return fecha2.diff(fecha1, 'days')
        }

    }


    return (
        <>
            <Grid container spacing={2}>
                <Grid item sm={12}>
                    <Select values={placesFrom} valueOf={placeFrom} change={setPlaceFrom} placeholder={'Origen'}></Select>
                </Grid>
                <Grid item sm={12}>
                    <Select values={placesOf} valueOf={placeOf} change={setPlaceOf} placeholder={'Destino'}></Select>
                </Grid>
                <Grid item sm={6}>
                    <DatePiker placeholder={'Fecha de salida'}  change={setDayStart} />
                </Grid>
                <Grid item sm={6}>
                    <DatePiker placeholder={'Fecha de regreso'} change={setDayEnd} />
                </Grid>
                <Grid item sm={12}>
                    <TextField style={{ width: "100%" }} value={passager.a} placeholder="Adultos" onChange={(e) => { setPassager({ ...passager, a: e.target.value }) }} />
                </Grid>
                <Grid item sm={12}>
                    <TextField style={{ width: "100%" }} value={passager.b} placeholder="Niños" onChange={(e) => { setPassager({ ...passager, b: e.target.value }) }} />
                </Grid>
                <Grid item sm={12}>
                    <TextField style={{ width: "100%" }} value={passager.c} placeholder="Adultos mayores" onChange={(e) => { setPassager({ ...passager, c: e.target.value }) }} />
                </Grid>
                <Grid item sm={12}>
                    <button onClick={calculate}>Calcular</button>
                </Grid>
            </Grid>
        </>
    )

}
export default FormOne
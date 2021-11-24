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
import { color } from "@mui/system";

const FormOne = ({ url }) => {

    //-----------------------UseStates-------------------
    const [placeFrom, setPlaceFrom] = useState('') //Lugar de salida
    const [placeOf, setPlaceOf] = useState('') //Lugares de llegada
    const [dayStart, setDayStart] = useState('') //dia de salida
    const [dayEnd, setDayEnd] = useState('') // dia de regreso
    const [passager, setPassager] = useState({ a: '', b: '', c: '' }) //pasageros
    const [minnextday, setMinnextday] = useState();
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

    let Dates = new Date().toISOString().split("T")[0];
    let day = parseInt(Dates.split('-')[2]) + 1
    let mont = parseInt(Dates.split('-')[1])
    let year = parseInt(Dates.split('-')[0])
    let today = `${year}-${mont}-${day}`
    let nextDay = null;
    //-----------------------Funciones-------------------

    let a = passager.a ? a : 0


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
            "passager": parseInt(passager.a ? passager.a : 0) + parseInt(passager.b ? passager.b : 0) + parseInt(passager.c ? passager.c : 0)
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

    useEffect(() => {
        if (!dayStart) {
            nextDay = today
        } else {
            let next = dayStart.split("-")
            let day = parseInt(next[2]) + 1
            let mont = parseInt(next[1])
            let year = parseInt(next[0])
            setMinnextday(`${year}-${mont}-${day}`)
        }
        console.log('------->', minnextday)
    });

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
                    <DatePiker min={today} placeholder={'Fecha de salida'} change={setDayStart} />
                </Grid>
                <Grid item sm={6}>
                    <DatePiker min={minnextday} placeholder={'Fecha de regreso'} change={setDayEnd} />
                </Grid>
                <Grid item sm={12}>
                    {/* <TextField style={{ width: "100%" }} value={passager.a} placeholder="Adultos" onChange={(e) => { setPassager({ ...passager, a: e.target.value }) }} /> */}
                    <select style={{ width: "100%" }} placeholder="Adultos" onChange={(e) => { console.log(e.target.value); setPassager({ ...passager, a: e.target.value }) }}>
                        <option value="0"></option>
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
                    </select>
                </Grid>
                <Grid item sm={12}>
                    {/* <TextField style={{ width: "100%" }} value={passager.b} placeholder="Niños" onChange={(e) => { setPassager({ ...passager, b: e.target.value }) }} /> */}
                    <select style={{ width: "100%" }} placeholder="Adultos" onChange={(e) => { console.log(e.target.value); setPassager({ ...passager, b: e.target.value }) }}>
                        <option value="0"></option>
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
                    </select>
                </Grid>
                <Grid item sm={12}>
                    {/* <TextField style={{ width: "100%" }} value={passager.c} placeholder="Adultos mayores" onChange={(e) => { setPassager({ ...passager, c: e.target.value }) }} /> */}
                    <select style={{ width: "100%" }} placeholder="Adultos" onChange={(e) => { console.log(e.target.value); setPassager({ ...passager, c: e.target.value }) }}>
                        <option value="0"></option>
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
                    </select>
                </Grid>
                <Grid item sm={12}>
                    <button className="boton-utravel" onClick={calculate}>Calcular</button>
                </Grid>
            </Grid>
        </>
    )

}
export default FormOne
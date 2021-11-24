import React, { useEffect, useState } from "react";
import moment from "moment";

export default ({ placeholder, change, min}) => {

    let Dates = new Date().toISOString().split("T")[0];
    let day = parseInt(Dates.split('-')[2]) + 1
    let mont = parseInt(Dates.split('-')[1])
    let year = parseInt(Dates.split('-')[0])

    const [today, setToday] = useState(`${year}-${mont}-${day}`);
    useEffect(() => {


        console.log("")
    });
    return (
        <>
            <label for="date">{placeholder} : </label>
            <input required min={min} type="date" id="date" onChange={(e) => {

                var fecha1 = moment('2016-07-12');
                var fecha2 = moment(e.target.value);

                //console.log(fecha2.diff(fecha1, 'days'), ' dias de diferencia');

                change(e.target.value)
            }}></input>
        </>);
}
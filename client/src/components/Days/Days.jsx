import React from 'react';
import style from './Days.module.css'

export default function Days ({max, min, date, img, day, night}){

    const tiempo = new Date(date * 1000);
    const semana = ['Domingo', 'lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const fecha = tiempo.getDate();
    const dia = `${semana[tiempo.getDay()]} ${fecha}`;

    return(<div className={style.containerDays}>
        <h3>{dia}</h3>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
        <p>Temperatura: </p>
        <p>{`${max}° / ${min}°`}</p>
        <p>{`Mañana: ${Math.round(day)}° Noche: ${Math.round(night)}° `}</p>
    </div>)
}
import React from 'react';
import { useSelector } from 'react-redux';

export default function Home (){

    const { cities } = useSelector(state => state)

    return(<div>
        {cities.map(e => (<div key={e.id}>
            <h1>{e.name}</h1>
            <img src={`http://openweathermap.org/img/wn/${e.img}@2x.png`} alt="" />
            <p>Temperatura: </p>
            <p>Max: {`${e.max}°`}</p>
            <p>Min: {`${e.min}°`}</p>
        </div>))}
    </div>)
}
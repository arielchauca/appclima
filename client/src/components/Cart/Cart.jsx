import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDaysCity } from '../../redux/actions';

export default function Cart ({ name, max, min, img, id, lat, long }){

    const dispatch= useDispatch();

    const handleCityByDays = (lat, long) => {
        dispatch(getDaysCity(lat, long))
    }

    return(<div>
        <Link to={`/details/${id}`}  onClick={() => handleCityByDays(lat, long)}>
            <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="" />
            <h2>{name}</h2>
            <p>Temperatura: </p>
            <p>{` Max: ${max}° Min: ${min}°`}</p>
        </Link>
    </div>)
}
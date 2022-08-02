import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCityById, getDaysCity } from '../../redux/actions';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Days from '../Days/Days.jsx';
import moment from 'moment';
import style from './Details.module.css';

export default function Details (){

    const dispatch = useDispatch();
    const city = useSelector(state => state.details);
    const daysCity = useSelector(state => state.cityDays)

    let { id } = useParams();
    
    useEffect(() => {
        dispatch(getCityById(id))   
    },[])

    useEffect(() => {
        if(city.latitud && city.longitud){
            dispatch(getDaysCity(city.latitud, city.longitud))
        }
    },[city])

    const minutos = city.time / 60;
    const hora = moment().utcOffset(minutos).format("h:mm A");

    return(<div>
       {city? <div className={style.containerDetails}>
         <img src={`http://openweathermap.org/img/wn/${city.img}@2x.png`} alt="" />
            <h2>Clima en {city.name}</h2>
            <p>Horario: {hora}</p>
            <p>Temperatura:</p>
            <h1>{`${city.temp}°`}</h1>
            <p>Sensación termica: {city.feel}</p>
            <p>Humedad: {`${city.humidity} %`}</p>
            <p>Visibilidad: {`${city.visibility} km`}</p>
            <p>Velocidad del viento: {`${city.wind_speed} m/s`}</p>
            <p>Presión: {`${city.pressure} hPa`}</p>
            <p>Descripción: {city.description}</p>
            <p>{`${city.max}° / ${city.min}°`}</p>
        </div>:null}

           {daysCity.daily?<div className={style.containerDays}>
                {daysCity.daily.map((e,i) => (
                    <Days
                     key={i}
                     date={e.dt}
                     img={e.weather[0].icon}
                     day={e.temp.morn}
                     night={e.temp.night}
                     min={Math.round(e.temp.min)} 
                     max={Math.round(e.temp.max)}
                    />
                ))}
            </div>: null}

           {city.latitud && city.longitud ? <MapContainer
                center={[city.latitud, city.longitud]}
                zoom={11}
                style={{ width: '80vw', height: '40vh'}}
            >
                <TileLayer
                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                 <Marker position={[city.latitud, city.longitud]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>:null}
    </div>)
}
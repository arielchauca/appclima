import React from 'react';
import Cart from '../Cart/Cart.jsx';
import style from './Carts.module.css';
import { useDispatch } from 'react-redux';
import { deleteCity } from '../../redux/actions';

export default function Carts ({cities}){
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteCity(id))
    }

    return(<div className={style.container}>
        {
        cities.map(e => (<div key={e.id}>
            <Cart
            id={e.id}
            name={e.name}
            max={e.max}
            min={e.min}
            img={e.img}
            lat={e.latitud}
            long={e.longitud}
            /> 
            <button className={style.btnDelete} onClick = {() => handleDelete(e.id)}>X</button>
        </div>))
        }
    </div>)
}
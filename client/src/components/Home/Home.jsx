import React from 'react';
import { useSelector } from 'react-redux';
import Carts from '../Carts/Carts';
import style from './Home.module.css';

export default function Home (){

    const { cities } = useSelector(state => state)
    
    return(<div className={style.containerHome}>
        <Carts cities={cities} />
    </div>)
}

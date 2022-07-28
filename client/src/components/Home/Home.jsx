import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carts from '../Carts/Carts';
import style from './Home.module.css';
import { clearDetails, clearDays } from '../../redux/actions';

export default function Home (){

    const { cities } = useSelector(state => state)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearDetails())   
        dispatch(clearDays())     
    },[])


    return(<div className={style.containerHome}>
        <Carts cities={cities} />
    </div>)
}

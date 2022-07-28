import React, { useState } from "react";
import style from "./Navbar.module.css";
import { MdSearch } from "react-icons/md";
import { FaUser, FaShareAlt } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
// import sun from "../../assets/images/weather_sun_sunny_sunshine_icon_124153.png";
import moon from "../../assets/images/weather_full_moon_night_icon_124167.png";
import { getCityByName, getCityByCoors } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Navbar() {
    
    const [input, setInput] = useState("")

    const dispatch = useDispatch();
    
    const handleSearch = (e) => {
        setInput(e.target.value)
    }
    
    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(getCityByName(input))
        setInput("")
    }

    const geolocation = () => {
      navigator.geolocation.getCurrentPosition(
        function(position){
          console.log(position.coords.longitude, position.coords.latitude)
          dispatch(getCityByCoors(position.coords.latitude, position.coords.longitude))
        }
      ,
      function (error){
        console.log(error)
      })
    }
    
  return (
    <form className={style.container} onSubmit={handleSubmit}>
      <div className={style.containerNavbarLeft}>
        <Link to="/">
        <img className={style.logo} src={moon} alt="logo de la luna" />
        </Link>
        <SiGooglemaps onClick={geolocation}/>
      </div>
      <div className={style.containerNavbarCenter}>
        <input
          className={style.boxInput}
          type="text"
          value={input}
          onChange={handleSearch}
          placeholder="Ingrese el nombre de una ciudad"
        />
        <MdSearch onClick={handleSubmit} />
      </div>

      <div className={style.containerNavbarRight}>
        <FaShareAlt />
        <FaUser />
      </div>
    </form>
  );
}

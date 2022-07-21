import React, { useState } from "react";
import style from "./Navbar.module.css";
import { MdSearch } from "react-icons/md";
import { FaUser, FaShareAlt } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
// import sun from "../../assets/images/weather_sun_sunny_sunshine_icon_124153.png";
import moon from "../../assets/images/weather_full_moon_night_icon_124167.png";
import { getCityByName } from '../../redux/actions';
import { useDispatch } from 'react-redux';

export default function Navbar() {
    
    const [input, setInput] = useState("")

    const dispatch = useDispatch();
    
    const handleSearch = (e) => {
        setInput(e.target.value)
    }
    
    const handleClick = () => {
      dispatch(getCityByName(input))
        setInput("")
    }
    
  return (
    <div className={style.container}>
      <div className={style.containerNavbarLeft}>
        <img className={style.logo} src={moon} alt="logo de la luna" />
        <SiGooglemaps />
      </div>
      <div className={style.containerNavbarCenter}>
        <input
          className={style.boxInput}
          type="text"
          value={input}
          onChange={handleSearch}
          placeholder="Ingrese el nombre de una ciudad"
        />
        <MdSearch onClick={handleClick} />
      </div>

      <div className={style.containerNavbarRight}>
        <FaShareAlt />
        <FaUser />
      </div>
    </div>
  );
}

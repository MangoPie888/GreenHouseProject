import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

import { ThemeContext } from '../../context/ThemeContext';
import {useContext} from "react";


function Greenhouse() {
const {themeName} = useContext(ThemeContext);

  return (
    <section>
    {themeName === "day"? <img  className='greenhouse-img'
            src={dayImage}
            alt='greenhouse' 
      /> : <img  className='greenhouse-img'
            src={nightImage}
            alt='greenhouse' 
      />}
      
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
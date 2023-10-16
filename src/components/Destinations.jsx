import { useState } from 'react';
import data from '../json/data.json';
import Destination from './Destination';
import '../styles/destinations.scss';

export default function Destinations() {
  const destinationsArr = data.destinations;

  const [currentDestination, setCurrentDestination] = useState(destinationsArr[0]);

  const changeDestination = (destinationId) => {
    destinationsArr.forEach(dest => {
      if (dest.id === destinationId) {
        setCurrentDestination(dest)
      }
    })
  }

  return (
    <div className="destinations-page">
      <h2 id="destinations-title">
        <span>01</span> Pick your destination
      </h2>
      <div className="destination-options">
        <button className={currentDestination.id === '0' ? 'active-btn' : ''} onClick={() => changeDestination('0')}>Moon</button>
        <button className={currentDestination.id === '1' ? 'active-btn' : ''} onClick={() => changeDestination('1')}>Mercury</button>
        <button className={currentDestination.id === '2' ? 'active-btn' : ''} onClick={() => changeDestination('2')}>Venus</button>
        <button className={currentDestination.id === '3' ? 'active-btn' : ''} onClick={() => changeDestination('3')}>Mars</button>
        <button className={currentDestination.id === '4' ? 'active-btn' : ''} onClick={() => changeDestination('4')}>Jupiter</button>
        <button className={currentDestination.id === '5' ? 'active-btn' : ''} onClick={() => changeDestination('5')}>Saturn</button>
        <button className={currentDestination.id === '6' ? 'active-btn' : ''} onClick={() => changeDestination('6')}>Uranus</button>
        <button className={currentDestination.id === '7' ? 'active-btn' : ''} onClick={() => changeDestination('7')}>Neptune</button>
      </div>
      <Destination {...currentDestination} />
    </div>
  );
}

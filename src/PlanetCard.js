import React from 'react';
import Resident from './Resident';
import './PlanetCard.css';

const PlanetCard = ({ planet }) => {
  return (
    <div className="planet-card">
      <h2 className="planet-name">{planet.name}</h2>
      <div className="planet-details">
        <div className="planet-info">
          <p><strong>CLIMATE:</strong> {planet.climate}</p>
          <p><strong>POPULATION:</strong> {planet.population}</p>
          <p><strong>TERRAIN:</strong> {planet.terrain}</p>
        </div>
        <div className="residents-table">
          <h3>Residents:</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Height</th>
                <th>Mass</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {planet.residents.map((residentUrl, index) => (
                <Resident key={index} residentUrl={residentUrl} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;

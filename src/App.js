import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlanetCard from './PlanetCard';
import './App.css';

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [currentPlanetIndex, setCurrentPlanetIndex] = useState(0);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const responses = await Promise.all([
          axios.get('https://swapi.dev/api/planets/?page=1&format=json'),
          axios.get('https://swapi.dev/api/planets/?page=2&format=json'),
          axios.get('https://swapi.dev/api/planets/?page=3&format=json'),
          axios.get('https://swapi.dev/api/planets/?page=4&format=json'),
          axios.get('https://swapi.dev/api/planets/?page=5&format=json'),
          axios.get('https://swapi.dev/api/planets/?page=6&format=json')
        ]);

        const combinedResults = responses.reduce((acc, curr) => {
          return [...acc, ...curr.data.results];
        }, []);

        setPlanets(combinedResults);
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };

    fetchPlanets();
  }, []);

  const handleNextPlanet = () => {
    setCurrentPlanetIndex(prevIndex => prevIndex + 1);
  };

  const handlePreviousPlanet = () => {
    setCurrentPlanetIndex(prevIndex => prevIndex - 1);
  };

  return (
    <div className="App">
      <h1>Star Wars Planets Directory</h1>
      {planets.length > 0 && (
        <div className="planet-container">
          <PlanetCard planet={planets[currentPlanetIndex]} />
          <div className="buttons-container">
            <button onClick={handlePreviousPlanet} disabled={currentPlanetIndex === 0}>
              Previous
            </button>
            <button onClick={handleNextPlanet} disabled={currentPlanetIndex === planets.length - 1}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;

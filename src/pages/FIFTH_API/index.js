import React, { useState, useEffect } from 'react';
import './styles.scss';

import Navbar from '../../components/Navbar';


const Fifth = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.mocki.io/v1/b043df5a'); // 1st Fetching data
      const json = await response.json();
      setData(json);
    }
    fetchData()
  }, [])
  
  return ( // showing data in UI
    <div className="fifth">
      <Navbar />
      <div className="heading">Fifth API</div>
      <div className="row-container">
        {
          data.length ? (
            data.map(({name, city}) => (
              <div className="cards">
                <div className="title">Name: {name}</div>
                <div className="city">City: {city}</div>
              </div>
            ))
          ) : (<div>Loading...</div>)                
        }          
      </div>
    </div>
  );
}  


export default Fifth;
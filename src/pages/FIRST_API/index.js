import React, { useState, useEffect } from 'react';
import './styles.scss';

import Navbar from '../../components/Navbar';


const First = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function fetchData () {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos'); // 1st Fetching data
      const json = await response.json();
      setData(json);
    }
    fetchData()
  }, []) 

  
  return ( // showing data in UI
    <div className="first">
      <Navbar />
      <div className="heading">First API</div>
      <div className="row-container">
        {
          data.length ? (
            data.slice(0, 50).map(({id, title, url}) => (
              <div className="cards" key={id}>
                <div className="title">{title}</div>
                <div className="image">
                  <img src={url} alt="..." />
                </div>
              </div>
            ))
          ) : (<div className="loading">Loading...</div>)              
        }          
      </div>
    </div>
  );
}  

export default First;
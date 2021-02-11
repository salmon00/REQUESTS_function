import React, { useState, useEffect } from 'react';
import './styles.scss';

import Navbar from '../../components/Navbar';


const Fourth = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://fakestoreapi.com/products'); // 1st Fetching data
      const json = await response.json();
      setData(json);
    }
    fetchData()
  }, [])


  return ( // showing data in UI
    <div className="fourth">
      <Navbar />
      <div className="heading">Fourth API</div>
      <div className="container">
        {
          data.length ? (
            data.map(({id, title, price, image}) => (
              <div className="card" key={id}>
                <div className="title">{title}</div>
                <div className="price">Price: {price}</div>
                <div className="img"><img src={image} alt="..."></img></div>
              </div>
            ))
          ) : (<div>Loading...</div>)                
        }          
      </div>
    </div>
  );
}  


export default Fourth;
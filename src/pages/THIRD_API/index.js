import React, { useState, useEffect} from 'react';
import './styles.scss';

import Navbar from '../../components/Navbar';


const Third = () => {
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
    <div className="third">
      <Navbar />
      <div className="heading">Third API</div>
      <div className="row-container">
        {
          data.length ? (
            data.map(({id, title, thumbnailUrl}) => (
              <div className="cards" key={id}>
                <div className="title">{title}</div>
                <div className="image">
                  <img src={thumbnailUrl} alt="..." />
                </div>
              </div>
            ))
          ) : (<div>Loading...</div>)               
        }          
      </div>
    </div>
  );
}  


export default Third;
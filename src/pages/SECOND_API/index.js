import React, { useState, useEffect} from 'react';
import './styles.scss';

import Navbar from '../../components/Navbar';


const Second = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos'); // 1st Fetching data
      const json = await response.json();
      setData(json); 
    }
    fetchData()
  }, [])

  
  return ( // showing data in UI
    <div className="second">
      <Navbar />
      <div className="heading">Second API</div>
      <div className="row-container">
        {
          data.length ? (
            data.map(({ id, title }) => (
              <div className="cards" key={id}>
                <div className="title">{title}</div>
              </div>
            ))
          ) : (<div>Loading...</div>)              
        }          
      </div>
    </div>
  );
}  


export default Second;
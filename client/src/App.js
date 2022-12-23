import { useState, useEffect } from 'react';
import './App.css';
import ImgGoogleMap from './google-maps.png';
import axios from 'axios';

function App() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("0");
  const [description, setDescription] = useState("");

  useEffect(() => {
    async function loadData() {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3d4707888cae1cef35d3b4069b3862d3`);

      if (response.status === 200) {
        const temp = console.log(response.data.main.temp - 273.15);
        setTemp(temp)
      }

    }
  
   
    loadData();
  }, [city])

  return (
    <>
      <div className="weather-container">
        <h1 className='app-title'> Weather APP</h1>
        <div className="search-container" >
          <img src={ImgGoogleMap} className="img-location" />
          <input type="text" 
            placeholder="Enter city name"
            className="input-city"
            value={city}
            onChange={(e) => setCity(e.target.value)} />
        </div>                                                  
        <div className="output-city">
          <h3>City:{city}</h3>
          
        </div>

        <div className="output-city">
        <h3>Temperature:{temp}</h3>
          
        </div>
      </div>
    </>
  )

}
export default App;
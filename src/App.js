import React,{useState} from 'react';

import './App.css';
import axios from 'axios';

function App() {
  const [data,setDate]=useState({});
  const [location,setLocation]=useState('');

  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location || mumbai}&appid=e2762bec35846609a015787a6526caa8`;
   const searchLocation=(event)=>{
      if(event.key==='Enter'){
        axios.get(url).then((response)=>{
          setDate(response.data)
          console.log(response.data)
        })
        setLocation('');
      }
   }
  return (
    <div className="app">
      <div className='search'>
        <input  
            value={location}
            placeholder='Enter Location'
            onChange={(event)=>setLocation(event.target.value)}   
            onKeyPress={(event)=>searchLocation(event)}
        />
        {/* <button onClick={searchLocation}><i class="fa-solid fa-magnifying-glass"></i></button> */}
      </div>
      <div className="container">
        <div className="top">
          <div className='subTop'>

            <div className="loaction">
              {data.name ? <p><i className="fa-solid fa-location-dot"></i> {data.name}</p>: <p>City Name</p>}
            </div>

            <div className='country'>
             {data.sys ? <p><i class="fa-solid fa-globe"></i> {data.sys.country}</p>: <p> Country</p> }
            </div>
          </div>

          <div className="temp">
            {data.main ? <h1>{parseInt(data.main.temp-273.15)} &#8451;</h1>: <h1>0 &#8451;</h1>}
          
          </div>

          <div className="description">
            <p>{data.weather ? data.weather[0].description: "Weather" }</p>
          </div>
        </div>

        <div className="bottom">
          <div className="feels">
            <p className='bold'> {data.main ? parseInt(data.main.feels_like-273.15) : 0 } &#8451;</p>
            <p>Feels like</p>
            
          </div>

          <div className="humidity">
            <p className='bold'>{data.main ? data.main.humidity: 0 } %</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p className='bold'>{data.wind ? data.wind.speed: 0 } MPH</p>
            <p>Wind Speed</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App;

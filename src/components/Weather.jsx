import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


function Weather() {
  const stateData = useSelector((state) => state.changeCity.value);
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const baseURL = "https://api.weatherapi.com/v1";
    const api = "/forecast.json";
    const Parameters = { key: "66b6e7adb5614a8dbe2153906242005", q: stateData };
    async function fetchApi() {
      try {
        const response = await fetch(`${baseURL}${api}?key=${Parameters.key}&q=${Parameters.q}`);
        const data = await response.json();
        setApiData(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    if (stateData) {
      fetchApi();
    }
  },[stateData]);

  return (
    <div>
      {apiData ? (
        <div className="card-body">
          <div>
            <h3>Current weather in {apiData.location.name}, {apiData.location.country} on  {apiData.location.localtime}</h3>
          </div>
        
  

      
          <div className="card-body">
            <img className="img-thumbnail card-image" src={apiData.current.condition.icon} alt="weather condition" />
            <h5>{apiData.current.condition.text}</h5>
            <h5>Temperature: {apiData.current.temp_c} °C</h5>
            <h5>Feels Like: {apiData.current.feelslike_c} °C</h5>
            <h5>Humidity: {apiData.current.humidity}</h5>
            <h5>Cloud: {apiData.current.cloud}</h5>
            <h5>Wind Kilometers Per Hour: {apiData.current.wind_kph}</h5>
            <h5>UV: {apiData.current.uv}</h5>
          </div>

          <div className='card-body'>
          <h3 >Overall today <img src={apiData.forecast.forecastday[0].day.condition.icon}/> {apiData.forecast.forecastday[0].day.condition.text} </h3>
              <table className='table'>
               
                <thead>
                  <tr>
                    <th>Forcast</th>
                    <th>Descriptions</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Max Temperature</td>
                    <td>
                      {apiData.forecast.forecastday[0].day.maxtemp_c} °C
                    </td>
                </tr>
                <tr>
                    <td>Min Temperature</td>
                    <td>
                      {apiData.forecast.forecastday[0].day.mintemp_c} °C
                    </td>
                </tr>
                <tr>
                    <td>Avg Temperature</td>
                    <td>
                      {apiData.forecast.forecastday[0].day.avgtemp_c} °C
                    </td>
                </tr>
                <tr>
                    <td>Sunrise</td>
                    <td>
                    {apiData.forecast.forecastday[0].astro.sunrise}
                    </td>
                </tr>
                <tr>
                    <td>Sunset</td>
                    <td>
                    {apiData.forecast.forecastday[0].astro.sunset}
                    </td>
                </tr>
                </tbody>
              </table>
          </div>
            
    
            
          
        </div>
      ) : ( 
        <h3>Loading...</h3>
      )}
    </div>
  );
}

export default Weather;

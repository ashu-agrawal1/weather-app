
import { useEffect, useState } from 'react'
import './App.css'
import DayWiseWheather from './Components/DayWiseWheather'
import DisplayWeather from './Components/DisplayWeather'
import Loading from './Components/Loading'
import { fetchData } from './http.js';

function App() {
  const [responsedata, setResponsedata] = useState({});
  const [isFetching, setIsFetching] = useState(true);
  const [inputData, setInputData] = useState('');
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    async function fetchWeatherData() {
      const resData = await fetchData();
      setResponsedata(resData);
      const dailyForecast = resData?.list?.filter((reading) =>
        reading.dt_txt?.includes('12:00:00')
      );
      setForecastData(dailyForecast || []);
      setIsFetching(false);
    }
    fetchWeatherData();
  }, []);


  function handleKeyPress(event) {
    if (event.key === 'Enter') {

      fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputData || 'Delhi'}&APPID=407141f6d99e830681e770ad7e16c024&units=metric`)
        .then(res => res.json())
        .then((res) => {
          console.log("rewrerw", res);
          console.log("checking",res.cod );
          if (res?.cod != "200") {
            alert('Please Enter Valid city')
            setInputData('')
            return {}
          }
          return setResponsedata(res)
        })
        .catch(e => {
          console.log("errrrrr", e)
        })
      const dailyForecast = responsedata?.list?.filter((reading) =>
        reading?.dt_txt?.includes('12:00:00')
      );
      setIsFetching(false);
      setForecastData(dailyForecast || []);
    }
  }
  if (isFetching) {
    return (
      <Loading LoadingText='Loading...' />
    );
  }
  return (
    <div className='body'>
      <input type='text' placeholder='Enter the city' value={inputData} onChange={(event) => { setInputData(event.target.value) }} onKeyUp={handleKeyPress} />
      {isFetching && <Loading LoadingText='Fetching the Weather Status' />}
      {!isFetching && <DisplayWeather data={responsedata} />}
      <DayWiseWheather DayList={forecastData} />
    </div>
  )
}

export default App

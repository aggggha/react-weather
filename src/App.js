import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';

function App() {
  const [locationList, setLocationList] = useState('');
  const [weather, setWeatherList] = useState([]);
  const APIEndpoint = 'https://ibnux.github.io/BMKG-importer/cuaca/';

  useEffect(() => {
    const getLocationlist = async () => {
      const res = await getLocation();
      setLocationList(res);
    }

    getLocationlist();
  }, [])

  const getLocation = async () => {
    const res = await fetch(`${APIEndpoint}/wilayah.json`);
    const data = await res.json();

    return data;
  }

  const getWeather = async (id) => {
    const res = await fetch(`${APIEndpoint}/${id}.json`);
    const data = await res.json();

    setWeatherList([]);
    setWeatherList(data);
    document.querySelector('.horizontal-scroller') !== null && document.querySelector('.horizontal-scroller').scrollTo(0, 0);
  }

  return (
    <div className='App'>
      <div className='background-banner'></div>
      <div className='container'>
        <div>
          <SearchBar locations={locationList.length > 0 && locationList} onLocationChange={getWeather} />
          <center className='main-content'>
            {weather.length > 0 ? (
              <>
                <h3>Prakiraan Cuaca Tiap Jam</h3>
                <div className='horizontal-scroller'>
                  <WeatherCard weather={weather} />
                </div>
              </>
            ) : (<h3>Halo! Untuk memulai, silakan masukkan lokasi Anda.</h3>)}
          </center>
        </div>
        <footer className='footer'>
          <p>
            Gambar oleh <a href="https://www.unsplash.com/" target='_blank' rel='noreferrer'>Unsplash</a> | API oleh <a href="https://github.com/ibnux" target='_blank' rel='noreferrer'>ibnux</a> | Data oleh <a href="https://data.bmkg.go.id/" target='_blank' rel='noreferrer'>Badan Meteorologi, Klimatologi, dan Geofisika (BMKG)</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;

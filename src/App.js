import { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { provinces, URLEndpoint, options } from './constant/dataSource';
import XMLParser from 'fast-xml-parser';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import WeatherCardInfo from './components/WeatherCardInfo';
import About from './components/About';

function App() {
  const [locationList, setLocationList] = useState('');
  const [weather, setWeather] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); // locationList loading status
  const [isCardClicked, setIsCardClicked] = useState(false); // for weather info details
  const [detailedInfo, setDetailedInfo] = useState({});
  const [updateInfo, setUpdateInfo] = useState('0');

  useEffect(() => {
    const getLocationlist = async () => {
      for (let i = 0; i < provinces.length; i++) {
        const res = await fetch(`${URLEndpoint}${provinces[i]}.xml`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/xml',
          },
          mode: 'cors',
        });
        const resText = await res.text();
        const resJSON = XMLParser.parse(resText, options); // validator is false
        const locations = resJSON.data.forecast.area.map((location) =>
          location.type === 'land' && ({
            'coordinate': location.coordinate,
            'province': location.domain,
            'id': location.id,
            'cityName': location.name[1].name
          })
        );

        setLocationList(prevLocation => [...prevLocation, { 'data': locations }]);
      }
      setIsLoaded(true);
    }

    const getUpdateInfo = async () => {
      const res = await fetch(`${URLEndpoint}Indonesia.xml`);
      const resText = await res.text();
      const resJSON = XMLParser.parse(resText, options); // validator is false

      setUpdateInfo(resJSON.data.forecast.issue.timestamp);
    }

    !isLoaded && getLocationlist();
    getUpdateInfo();
  }, [isLoaded])

  const getWeather = async (id, prov) => {
    const province = prov === 'Kep. Bangka Belitung' ? prov.replace('Kep. ', '').replaceAll(' ', '') : prov.replaceAll(' ', '');
    const res = await fetch(`${URLEndpoint}${province}.xml`);
    const resText = await res.text();
    const resJSON = XMLParser.parse(resText, options, true);

    const data = resJSON.data.forecast.area.filter((area) => area.id === id);
    setIsCardClicked(false);
    setDetailedInfo({});
    setWeather([]); // clear first, then add. For visual update
    setWeather(data[0]);
    document.querySelector('.horizontal-scroller') !== null && document.querySelector('.horizontal-scroller').scrollTo(0, 0);
  }

  const onCardClick = (wData, wiData, tempData, humidData, tempMinData, tempMaxData, humidMinData, humidMaxData, wsData) => {
    setDetailedInfo({
      'weather': wData,
      'windicon': wiData,
      'windspeed': wsData,
      'temperature': tempData,
      'humidity': humidData,
      'tmin': tempMinData,
      'tmax': tempMaxData,
      'hmin': humidMinData,
      'hmax': humidMaxData
    });
    setIsCardClicked(true);
  }

  const closePanel = () => {
    setIsCardClicked(false);
    setDetailedInfo({});
  }

  const dismissAll = () => {
    setIsCardClicked(false);
    setDetailedInfo({});
    setWeather([]);
  }


  return (
    <BrowserRouter>
      <div className='App'>
        <div className='background-banner'></div>
        <Route path='/react-weather' exact render={(props) => (
          <>
            <div className='container'>
              <div className='container-inner'>
                <div>
                  <SearchBar locations={isLoaded && locationList} isLoaded={isLoaded} onLocationChange={getWeather} dismissAll={dismissAll} />
                  <center className='main-content'>
                    {(weather.parameter !== undefined && weather.parameter.length > 0) ? (
                      <>
                        <div className='section one'>
                          <div className='section-title'>
                            <h3>Prakiraan Cuaca Tiap Jam</h3>
                            <p style={{fontSize: '0.7em'}}>
                              Diterbitkan: {updateInfo.toString().substr(0, 4)}-{updateInfo.toString().substr(4, 4).split(/(?=(?:..)*$)/gm).join('-')} {updateInfo.toString().substr(8).split(/(?=(?:..)*$)/gm).join(':')}
                            </p>
                          </div>
                          <div className='horizontal-scroller'>
                            <WeatherCard data={weather} onClick={onCardClick} />
                          </div>
                        </div>

                        <div className={`section two hcontainer ${isCardClicked ? 'show' : ''}`}>
                          {isCardClicked && <WeatherCardInfo data={detailedInfo} onClick={closePanel} />}
                        </div>
                      </>
                    ) : (<h3 className='section-title'>Halo! Untuk memulai, silakan masukkan lokasi Anda.</h3>)}
                  </center>
                </div>
                <footer className='footer'>
                  <p>
                    <Link to="/react-weather/about">Library</Link> | Gambar oleh <a href="https://www.unsplash.com/" target='_blank' rel='noreferrer'>Unsplash</a> | Data oleh <a href="https://data.bmkg.go.id/" target='_blank' rel='noreferrer'>Badan Meteorologi, Klimatologi, dan Geofisika (BMKG)</a>
                  </p>
                </footer>
              </div>
            </div>
          </>
        )} />
        <Route path='/react-weather/about' component={About} />
      </div>
    </BrowserRouter>
  );
}

export default App;

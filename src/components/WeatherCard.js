import { weatherCodes } from '../constant/dataSource';

const WeatherCard = ({ data, onClick }) => {

    return (
        <>
            {data.parameter[6].timerange.map((weather, weatherIndex) => (
                <div
                    key={`${weatherIndex}`}
                    className='weather-card'
                    onClick={() => onClick(
                        weather, // weather data
                        data.parameter[7].timerange[weatherIndex], // for icon
                        data.parameter[5].timerange[weatherIndex], // temp
                        data.parameter[0].timerange[weatherIndex], // humid
                        data.parameter[4].timerange.filter((list) => list.day === weather.datetime.substr(0, 8)), // tempmin
                        data.parameter[2].timerange.filter((list) => list.day === weather.datetime.substr(0, 8)), // tempmax
                        data.parameter[3].timerange.filter((list) => list.day === weather.datetime.substr(0, 8)), // humidmin
                        data.parameter[1].timerange.filter((list) => list.day === weather.datetime.substr(0, 8)), // humidmax
                        data.parameter[8].timerange[weatherIndex] // wind speed
                        )}
                >
                    <p style={{ fontSize: 11, opacity: 0.7 }}>{weather.datetime.substr(0, 4)}-{weather.datetime.toString().substr(4, 4).split(/(?=(?:..)*$)/gm).join('-')}</p>
                    <p>{weather.datetime.toString().substr(8).split(/(?=(?:..)*$)/gm).join(':')}</p>
                    <div className={`weather-icon small wind-dir ${data.parameter[7].timerange[weatherIndex].value[1].name}`}></div>
                    <div className={`weather-icon ${weatherCodes[weather.value.name].toLowerCase().replace(' ', '-')}`}></div>
                    <div>
                        <b>{weatherCodes[weather.value.name]}</b><br />
                        <div className='weather-icon small inline temp'></div>{data.parameter[5].timerange[weatherIndex].value[0].name}&#xb0;{data.parameter[5].timerange[weatherIndex].value[0].unit}
                        <span className='shadow-separator'></span>
                        <div className='weather-icon small inline humid'></div>{data.parameter[0].timerange[weatherIndex].value.name}{data.parameter[0].timerange[weatherIndex].value.unit}
                        <span className='shadow-separator'></span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default WeatherCard;
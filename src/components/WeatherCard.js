const WeatherCard = ({ weather }) => {
    return (
        <>
        {weather.map((value) => (
            <div className='weather-card' key={value.id}>
                <p>
                    <p style={{fontSize: 11, opacity: 0.7}}>{value.jamCuaca.substring(0, 10)}</p>
                    {value.jamCuaca.substring(10, 16)}
                </p>
                <div className={`weather-icon ${value.cuaca.toLowerCase().replace(' ', '-')}`}></div>
                <p>
                    <b>{value.cuaca}</b><br />
                    {value.tempC}&#xb0;C {value.humidity}%
                </p>
            </div>
        ))}
        </>
    )
}

export default WeatherCard;
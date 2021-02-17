import { weatherCodes } from '../constant/dataSource';

const WeatherCardInfo = ({ data, onClick }) => {

    return (
        <>
            <div className='info-card-inner flexed loose-gap vcenter hcenter'>
                <div className={`weather-icon big ${weatherCodes[data.weather.value.name].toLowerCase().replace(' ', '-')}`}></div>
                <div className='info-card-inner2 flexed loose-gap'>
                    <div className='one'>
                        <div className='subsection-title'><h3 style={{ display: 'inline' }}>Rincian</h3> - <div className='close-btn' onClick={onClick} style={{ display: 'inline' }}>Tutup panel</div></div>
                        <div className='hourly-details grid loose-gap'>
                            <div className='mini-card floated'>
                                <b>Temperatur</b>
                                <p>{data.temperature.value[0].name}&#xb0;{data.temperature.value[0].unit}</p>
                            </div>
                            <div className='mini-card floated'>
                                <b>Kelembaban</b>
                                <p>{data.humidity.value.name}{data.humidity.value.unit}</p>
                            </div>
                            <div className='mini-card floated'>
                                <b>Arah Angin</b>
                                <p style={{ position: 'relative', top: -13, left: -5 }}><i className={`weather-icon small inline wind-dir ${data.windicon.value[1].name}`}></i>{data.windicon.value[0].name}&#xb0;</p>
                            </div>
                            <div className='mini-card floated'>
                                <b>Kecepatan Angin</b>
                                <p>{data.windspeed.value[2].name} km/j</p>
                            </div>
                        </div>
                    </div>

                    <div className='two'>
                        <div className='subsection-title'><h3 style={{ display: 'inline' }}>Rincian Harian</h3> <div style={{ display: 'inline' }}>{data.weather.datetime.substr(0, 4)}-{data.weather.datetime.toString().substr(4, 4).split(/(?=(?:..)*$)/gm).join('-')}</div></div>
                        <div className='daily-details grid loose-gap vcenter'>
                            <div className='mini-card floated twice-width no-padding flexed'>
                                <div className={`weather-icon inline temp details-card ${weatherCodes['berawan']}`}></div>
                                <div style={{ width: '70%' }} className='flexed vcenter'>
                                    <p>{data.tmin[0].value[0].name}&#xb0;{data.tmin[0].value[0].unit}</p>
                                    <span className='line-horizontal'></span>
                                    <p>{data.tmax[0].value[0].name}&#xb0;{data.tmax[0].value[0].unit}</p>
                                </div>
                            </div>
                            <div className='mini-card floated twice-width no-padding flexed'>
                                <div className={`weather-icon humid details-card ${weatherCodes['berawan']}`}></div>
                                <div style={{ width: '70%' }} className='flexed vcenter'>
                                    <p>{data.hmin[0].value.name}{data.hmin[0].value.unit}</p>
                                    <span className='line-horizontal'></span>
                                    <p>{data.hmax[0].value.name}{data.hmax[0].value.unit}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WeatherCardInfo;

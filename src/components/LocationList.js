const LocationList = ({ value, onClick, index, active, setHover }) => {
    return (
        <div className={`result-list ${active ? 'selected' : ''}`} onClick={() => onClick(value.id, value.cityName, value.province)} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(undefined)} > 
            <p><b>{value.province}</b>, {value.cityName}</p>
        </div>
    )
}

export default LocationList;

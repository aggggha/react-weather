const LocationList = ({ value, onClick, index, active, setHover }) => {
    return (
        <div className={`result-list ${active ? 'selected' : ''}`} onClick={() => onClick(value.id)} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(undefined)} > 
            <p>{value.kota}</p>
        </div>
    )
}

export default LocationList;

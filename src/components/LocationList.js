const LocationList = ({ value, onClick, index, active, setHover }) => {
    return (
        <div className={`result-list ${active ? 'selected' : ''}`} onClick={() => onClick(value.id)} onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(undefined)} > 
            <p><b>{value.propinsi.match('DKI') ? value.propinsi.replace('DKI', 'DKI ') : value.propinsi.match('DI') ? value.propinsi.replace('DI', 'DI ') : value.propinsi.split(/(?=[A-Z])/).join(' ')}</b>, {value.kota}</p>
        </div>
    )
}

export default LocationList;

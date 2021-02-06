const LocationList = ({ value, onClick }) => {
    return (
        <div className='result-list' onClick={() => onClick(value.id)}>
            <p>{value.kota}</p>
        </div>
    )
}

export default LocationList;

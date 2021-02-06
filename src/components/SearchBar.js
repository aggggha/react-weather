import { MdPlace } from 'react-icons/md';
import { useState } from 'react';
import LocationList from './LocationList';

const SearchBar = ({ locations, onLocationChange }) => {
    const [textInput, setTextInput] = useState('');
    const [locationList, setLocationList] = useState([]);

    const filterList = (value) => {
        setTextInput(value);

        if (value.length > 3) {
            const filteredLocation = locations.filter((location) => 
                location.kota.toLowerCase().match(value)
            );
            setLocationList(filteredLocation);
        } else {
            setLocationList([]);
        }
    }

    const clearAndSubmitLocation = (id) => {
        const currentLocation = locations.filter((location) => 
            location.id.match(id)
        );

        setLocationList([]);
        setTextInput(currentLocation[0].kota);
        onLocationChange(id);
    }

    return (
        <div className='search'>
            <div className='search-bar'>
                {textInput.length > 0 && <div class='pre-btn'><MdPlace /></div>}
                <input type="text" value={textInput} placeholder='Pencarian...' className={`input-text ${textInput.length === 0 && 'padding'} `} onChange={(e) => filterList(e.target.value)} />
                {/* <button type="submit" className='gps-btn'><MdMyLocation /></button> */}
            </div>

            {locationList.length > 0 &&
                <div className={`result-popup ${locationList.length > 0 && 'show'}`}>
                    {locationList.map((list) => (<LocationList key={list.id} value={list} onClick={clearAndSubmitLocation} />))}
                </div>
            }

        </div>
    )
}

export default SearchBar

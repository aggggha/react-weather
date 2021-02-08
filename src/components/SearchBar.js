import { MdPlace } from 'react-icons/md';
import { useState, useEffect, useRef } from 'react';
import LocationList from './LocationList';

const SearchBar = ({ locations, onLocationChange }) => {
    const [textInput, setTextInput] = useState('');
    const [locationList, setLocationList] = useState([]);
    const textInputLoc = useRef(null);

    // Search suggestion
    const [hoveredItem, setHoveredItem] = useState(undefined);
    // const [selectedItem, setSelectedItem] = useState(undefined);

    const keypressHandler = (e) => {
        if (locationList.length > 0) {
            const listPosition = document.querySelector('.result-list.selected');
            const suggestionContainer = document.querySelector('.result-popup');

            if (e.keyCode === 40) {
                if (hoveredItem === undefined || locationList.length - 1 === hoveredItem || locationList.length === 1) {
                    setHoveredItem(0);
                    suggestionContainer.scrollTo(0, 0);
                } else {
                    setHoveredItem(hoveredItem + 1);
                }

                if (listPosition !== null) {
                    if (listPosition.offsetTop === suggestionContainer.lastElementChild.offsetTop) {
                        suggestionContainer.scrollTo(0, 0);
                    } else {
                        suggestionContainer.scrollTo(0, listPosition.offsetTop);
                    }
                }
            } else if (e.keyCode === 38) {
                if (hoveredItem === undefined || hoveredItem === 0) {
                    setHoveredItem(locationList.length - 1);
                } else {
                    setHoveredItem(hoveredItem - 1);
                }

                if (listPosition !== null) {
                    if (listPosition.offsetTop === suggestionContainer.firstElementChild.offsetTop) {
                        suggestionContainer.scrollTo(0, suggestionContainer.lastElementChild.offsetTop);
                    } else {
                        suggestionContainer.scrollTo(0, listPosition.offsetTop - 46);
                    }
                }
            } else if (e.keyCode === 13) {
                const currentLocation = locationList.filter((list, index) =>
                    index === hoveredItem && list
                );

                setLocationList([]);
                setTextInput(currentLocation[0].kota);
                onLocationChange(currentLocation[0].id);
                document.querySelector('.input-text').blur();
                setHoveredItem(undefined);
            }
        }
    }

    useEffect(() => {
        textInputLoc.current.focus();
    }, []);

    const filterList = (value) => {
        setTextInput(value);

        if (value.length > 0) {
            const filteredLocation = locations.filter((location) =>
                location.kota.toLowerCase().includes(value.toLowerCase())
            );
            setLocationList(filteredLocation);
        } else {
            setLocationList([]);
        }
    }

    const clearAndSubmitLocation = (id) => {
        const currentLocation = locations.filter((location) =>
            location.id.includes(id)
        );

        setLocationList([]);
        setTextInput(currentLocation[0].kota);
        onLocationChange(id);
    }

    return (
        <div className={`search ${locationList.length > 0 ? 'straight' : ''}`}>
            <div className='search-bar'>
                {textInput.length > 0 && <div className='pre-btn'><MdPlace /></div>}
                <input type="text" value={textInput} placeholder='Pencarian...' className={`input-text ${textInput.length === 0 ? 'padding' : ''} `} onChange={(e) => filterList(e.target.value)} ref={textInputLoc} onFocus={(e) => e.target.select()} onKeyDown={(e) => keypressHandler(e)} />
                {/* <button type="submit" className='gps-btn'><MdMyLocation /></button> */}
            </div>

            <div className={`result-popup ${locationList.length > 0 && 'show'}`}>
                {locationList.map((list, index) => (
                    <LocationList key={list.id} value={list} onClick={clearAndSubmitLocation} index={index} active={index === hoveredItem} setHover={setHoveredItem} />
                ))}
            </div>
        </div>
    )
}

export default SearchBar

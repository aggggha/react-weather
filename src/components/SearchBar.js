import { MdPlace, MdClose } from 'react-icons/md';
import { useState, useEffect, useRef } from 'react';
import LocationList from './LocationList';

const SearchBar = ({ locations, isLoaded, onLocationChange, dismissAll }) => {
    const [textInput, setTextInput] = useState('');
    const [result, setResult] = useState([]); // search result
    const [isNoResult, setIsNoResult] = useState(false); // no result indicator
    const textInputLoc = useRef(null);
    let i; // for highlighting search suggestion

    // Search suggestion
    const [hoveredItem, setHoveredItem] = useState(undefined);
    // const [selectedItem, setSelectedItem] = useState(undefined);

    const keypressHandler = (e) => {
        if (result.length > 0) {
            const listPosition = document.querySelector('.result-list.selected');
            const suggestionContainer = document.querySelector('.result-popup');

            if (e.keyCode === 40) {
                // console.log('down');
                if (hoveredItem === undefined || i === hoveredItem || i === -1) {
                    setHoveredItem(0);
                    suggestionContainer.scrollTo(0, 0);
                } else {
                    setHoveredItem(hoveredItem + 1);
                }

                if (listPosition !== null) {
                    if (listPosition.offsetTop === suggestionContainer.lastElementChild.offsetTop) {
                        suggestionContainer.scrollTo(0, 0);
                    } else {
                        suggestionContainer.scrollTo(0, listPosition.offsetTop - (listPosition.offsetHeight * 2));
                    }
                }
            } else if (e.keyCode === 38) {
                if (hoveredItem === undefined || hoveredItem === 0) {
                    setHoveredItem(i);
                } else {
                    setHoveredItem(hoveredItem - 1);
                }

                if (listPosition !== null) {
                    if (listPosition.offsetTop === suggestionContainer.firstElementChild.offsetTop) {
                        suggestionContainer.scrollTo(0, suggestionContainer.lastElementChild.offsetTop);
                    } else {
                        suggestionContainer.scrollTo(0, listPosition.offsetTop - (listPosition.offsetHeight * 3));
                    }
                }
            } else if (e.keyCode === 13) {
                let j = -1;
                const selectedLocation = result.map((list) => (
                    list.filter((item) => {
                        j++;
                        return j === hoveredItem && item;
                    })
                ));

                const selectedWeatherData = selectedLocation.filter((list) =>
                    list.some(area => area.length !== 0)
                );

                if (hoveredItem !== undefined) {
                    setResult([]);
                    setTextInput(selectedWeatherData[0][0].cityName);
                    onLocationChange(selectedWeatherData[0][0].id, selectedWeatherData[0][0].province);
                    setHoveredItem(undefined);
                    document.querySelector('.input-text').blur();
                    setIsNoResult(false);
                }
            }
        }
    }

    const filterList = (value) => {
        // isLoaded && console.log(locations);
        setTextInput(value);
        setHoveredItem(undefined);

        if (value.length > 0 && isLoaded) {
            const filteredLocList = locations.map((location) =>
                location.data.filter((list) =>
                    list.cityName !== undefined && list.cityName.toLowerCase().includes(value.toLowerCase())
                )
            );

            const lists = filteredLocList.filter((list) =>
                list.some(area => area.length !== 0)
            );

            if (lists.length === 0) {
                setIsNoResult(true);
                setResult([]);
            } else {
                setIsNoResult(false);
                setResult(lists);
            }
        } else {
            setResult([]);
            setHoveredItem(undefined);
            setIsNoResult(false);
        }
    }

    const clearAndSubmitLocation = (id, cityName, province) => {
        setResult([]);
        setTextInput(cityName);
        onLocationChange(id, province);
        setIsNoResult(false);
        setHoveredItem(undefined);
    }

    const clearSearch = () => {
        setResult([]);
        setTextInput('');
        setIsNoResult(false);
        setHoveredItem(undefined);
        dismissAll();
    }

    useEffect(() => {
        textInputLoc.current.focus();
    }, []);

    return (
        <div className={`search ${!isLoaded ? 'straight' : ''} ${(result.length > 0 || isNoResult) ? 'straight' : ''}`}>
            <div className='search-bar'>
                {textInput.length > 0 && <div className='pre-btn'><MdPlace /></div>}
                <input type="text" value={textInput} placeholder='Pencarian...' className={`input-text ${textInput.length === 0 ? 'padding' : ''}`} ref={textInputLoc} onFocus={(e) => e.target.select()} onChange={(e) => filterList(e.target.value)} onKeyDown={(e) => keypressHandler(e)} />
                {textInput.length > 0 && <button className='post-btn' onClick={clearSearch}><MdClose /></button>}
            </div>

            <div className={`result-popup ${!isLoaded && 'show'} ${(result.length > 0 || isNoResult) && 'show'}`}>
                {result.length > 0 ? (i = -1,
                    result.map((list) => (
                        list.map((item) => {
                            i++;
                            return (
                                <LocationList key={i} value={item} index={i} active={i === hoveredItem} setHover={setHoveredItem} onClick={clearAndSubmitLocation} />
                            );
                        })
                    ))) : (
                        (!isLoaded || !isNoResult) ? (
                            <div className='result-list'>Memuat data lokasi...</div>
                        ) : (
                                <div className='result-list'>Lokasi tidak ditemukan</div>
                            )
                    )
                }
            </div>
        </div>
    )
}

export default SearchBar

import {useState} from "react";
import {HSpace} from "../HSpase";
import {useDispatch, useSelector} from "react-redux";
import {toggleFiltered} from "../../models/isFiltered";
import {filterGamesByName, filterGamesByCategory, filterGamesByDate, resetGamesFilters} from "../../models/filterGameSlice";

export const GameInput = ({ placeholder }) => {
    const dispatch = useDispatch();
    const games = useSelector((state) => state.games ?? []);
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleConfirm = () => {
        dispatch(resetGamesFilters(games));
        if (placeholder === 'Name') {
            dispatch(filterGamesByName(value));
        }
        if (placeholder === 'Category') {
            dispatch(filterGamesByCategory(value));
        }
        if (placeholder === 'Date') {
            dispatch(filterGamesByDate(value));
        }
        dispatch(toggleFiltered(true));
    }

    return (
        <div className='user-input'>
            <div className="user-input-container">
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                />
                <HSpace size='l' />
                <div className='filter-click filter-submit' onClick={handleConfirm}>
                    <span>Confirm</span>
                </div>
            </div>
        </div>
    )
}
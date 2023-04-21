import {useState} from "react";
import {HSpace} from "../HSpase";
import {useDispatch, useSelector} from "react-redux";
import {filterUsersByAddress, filterUsersByEmail, filterUsersByName} from "../../models/filterUserSlice";
import {toggleFiltered} from "../../models/isFiltered";
import {resetUsersFilters} from "../../models/filterUserSlice";

export const UserInput = ({ placeholder }) => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users ?? []);
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleConfirm = () => {
        dispatch(resetUsersFilters(users));
        if (placeholder === 'Name') {
            dispatch(filterUsersByName(value));
        }
        if (placeholder === 'Email') {
            dispatch(filterUsersByEmail(value));
        }
        if (placeholder === 'Address') {
            dispatch(filterUsersByAddress(value));
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
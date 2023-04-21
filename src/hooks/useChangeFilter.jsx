import {useDispatch} from "react-redux";
import {toggleFiltered} from "../models/isFiltered";

export const useChangeFilter = (onChange) => {
    const dispatch = useDispatch();

    const handleClick = (value) => {
        onChange(value);
        dispatch(toggleFiltered(false));
    }

    return { handleClick };
}
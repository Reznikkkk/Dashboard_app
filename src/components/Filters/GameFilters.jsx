import {Filter} from "./Filter";
import {HSpace} from "../HSpase";
import {useState} from "react";
import {useChangeFilter} from "../../hooks";
import {GameInput} from "./GameInput";

export const GameFilters = () => {
    const [filterName, setFilterName] = useState('Name');
    const { handleClick } = useChangeFilter(setFilterName);

    return (
        <div className='user-filters-container'>
            <div className='user-filters'>
                <Filter text='Name' isActive={filterName === 'Name'} setActive={() => handleClick('Name')} />
                <HSpace size={'l'} />
                <Filter text='Category' isActive={filterName === 'Category'} setActive={() => handleClick('Category')} />
                <HSpace size={'l'} />
                <Filter text='Date' isActive={filterName === 'Date'} setActive={() => handleClick('Date')} />
            </div>
            {filterName === 'Name' &&
                <GameInput placeholder='Name'/>}
            {filterName === 'Category' &&
                <GameInput placeholder='Category'/>}
            {filterName === 'Date' &&
                <GameInput placeholder='Date'/>}
        </div>
    )
}
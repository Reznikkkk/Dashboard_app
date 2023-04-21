import {NavTab} from "../NavTab";
import './styles.css';
import {HSpace} from "../HSpase";
import {useDispatch, useSelector} from "react-redux";
import {changeTable} from "../../models/tableSlice";
import {toggleFiltered} from "../../models/isFiltered";

export const Nav = () => {
    const table = useSelector((state) => state.tables.name);
    const dispatch = useDispatch();

    const handleClick = (value) => {
        dispatch(changeTable(value));
        dispatch(toggleFiltered(false));
    };

    return (
        <nav className="nav">
            <NavTab
                text="Users"
                onClick={() => handleClick('Users')}
                active={table === 'Users'}
            />
            <HSpace size='m' />
            <NavTab
                text="Games"
                onClick={() => handleClick('Games')}
                active={table === 'Games'}
            />
        </nav>
    )
}
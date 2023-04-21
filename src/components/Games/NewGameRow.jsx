import {useDispatch} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import {useGameInput} from "../../hooks";
import {handleChange} from "../../utills";
import {createGame} from "../../models/gamesSlice";

export const NewGameRow = ({ onClick }) => {
    const { name, gameCategory, createdDate, setName, setGameCategory, setCreatedDate } = useGameInput();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(createGame({
            id: uuidv4(),
            name,
            gameCategory,
            createdDate,
        }))
        onClick();
    }

    return (
        <div className="table-row">
            <div className="table-row__cells">
                <div className='users-cell'>
                    <input
                        type="text" placeholder='Name'
                        value={name}
                        onChange={(event) => handleChange(event, setName)}
                    />
                </div>
                <div className='users-cell'>
                    <input
                        type="text" placeholder='Game category'
                        value={gameCategory}
                        onChange={(event) => handleChange(event, setGameCategory)}
                    />
                </div>
                <div className='users-cell'>
                    <input
                        type="text" placeholder='Created Date'
                        value={createdDate}
                        onChange={(event) => handleChange(event, setCreatedDate)}
                    />
                </div>
            </div>
            <div className="table-row__buttons">
                <div className='row-btn' onClick={handleClick}>
                    <img src={require('../../icons/confirm.svg').default} alt="edit"/>
                </div>
            </div>
        </div>
    )
}
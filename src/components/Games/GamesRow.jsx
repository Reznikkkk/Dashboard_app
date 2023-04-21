import {Cell} from "../Cell";
import {useState} from "react";
import '../../styles.css';
import {HSpace} from "../HSpase";
import {useDispatch} from "react-redux";
import {useGameInput} from "../../hooks";
import {deleteGame, updateGame} from "../../models/gamesSlice";

export const GamesRow = ({ game }) => {
    const { name, gameCategory, createdDate, setName, setCreatedDate, setGameCategory } = useGameInput();
    const [isActive, setActive] = useState(false);
    const dispatch = useDispatch();
    const handleToggleActive = () => {
        setActive(!isActive);
        if (isActive) {
            dispatch(updateGame({
                id: game.id,
                name,
                gameCategory,
                createdDate,
            }));
        }
    };
    const handleDelete = () => {
        dispatch(deleteGame(game.id))
    }

    return (
        <div className="table-row">
            <div className="table-row__cells">
                <Cell isActive={isActive} text={game.name} value={name} onChange={setName} />
                <Cell isActive={isActive} text={game.gameCategory} value={gameCategory} onChange={setGameCategory} />
                <Cell isActive={isActive} text={game.createdDate} value={createdDate} onChange={setCreatedDate} />
            </div>
            <div className="table-row__buttons">
                <div className='row-btn' onClick={handleToggleActive}>
                    <img src={require('../../icons/pen.svg').default} alt="edit"/>
                </div>
                <HSpace size='l' />
                <div className='row-btn' onClick={handleDelete}>
                    <img src={require('../../icons/basket.svg').default} alt="edit"/>
                </div>
            </div>
        </div>
    )
}
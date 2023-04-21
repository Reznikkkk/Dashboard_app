import {Cell} from "../Cell";
import {useState} from "react";
import '../../styles.css';
import {HSpace} from "../HSpase";
import {useDispatch} from "react-redux";
import {deleteUser, updateUser} from "../../models/usersSlice";
import {useUserInput} from "../../hooks";

export const UsersRow = ({ user }) => {
    const { name, email, address, setName, setEmail, setAddress } = useUserInput();
    const [isActive, setActive] = useState(false);
    const dispatch = useDispatch();
    const handleToggleActive = () => {
        setActive(!isActive);
        if (isActive) {
            dispatch(updateUser({
                id: user.id,
                name,
                email,
                address,
            }));
        }
    };
    const handleDelete = () => {
        dispatch(deleteUser(user.id))
    }

    return (
        <div className="table-row">
            <div className="table-row__cells">
                <Cell isActive={isActive} text={user.name} value={name} onChange={setName} />
                <Cell isActive={isActive} text={user.email} value={email} onChange={setEmail} />
                <Cell isActive={isActive} text={user.address} value={address} onChange={setAddress} />
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
import {useDispatch} from "react-redux";
import {createUser} from "../../models/usersSlice";
import { v4 as uuidv4 } from 'uuid';
import {useUserInput} from "../../hooks";
import {handleChange} from "../../utills";

export const NewUserRow = ({ onClick }) => {
    const { name, email, address, setName, setEmail, setAddress } = useUserInput();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(createUser({
            id: uuidv4(),
            name,
            email,
            address,
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
                        type="text" placeholder='Email'
                        value={email}
                        onChange={(event) => handleChange(event, setEmail)}
                    />
                </div>
                <div className='users-cell'>
                    <input
                        type="text" placeholder='Address'
                        value={address}
                        onChange={(event) => handleChange(event, setAddress)}
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
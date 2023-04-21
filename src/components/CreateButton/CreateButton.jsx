import './styles.css';

export const CreateButton = ({ onClick }) => {
    return (
        <div className='create-button' onClick={onClick}>
            <span>Create New</span>
        </div>
    )
}
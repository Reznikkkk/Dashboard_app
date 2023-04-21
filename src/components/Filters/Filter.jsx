import './styles.css';
export const Filter = ({ text, isActive, setActive }) => {
    return (
        <div
            className={ isActive ? 'filter filter-isActive' : 'filter'}
            onClick={setActive}
        >
            <span>{text}</span>
        </div>
    )
}
import './styles.css';

export const Cell = ({ isActive, text, value, onChange }) => {
    const handleChange = (event) => {
        onChange(event.target.value);
    }
{
    return (
        <div className="users-cell">
            {isActive ? (
                <input type="text" placeholder={text} value={value} onChange={handleChange} />
            ) : (
                <span>{text}</span>
            )}
        </div>
    )
}}
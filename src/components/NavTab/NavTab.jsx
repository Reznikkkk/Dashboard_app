import './styles.css';

export const NavTab = ({ text, active, onClick }) => {
    return (
        <div
            className={active ? 'nav-tab nav-tab-active' : 'nav-tab'}
            onClick={onClick}
        >
            <span>{text}</span>
        </div>
    )
}

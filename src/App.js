import './App.css';
import {Nav} from "./components/Nav";
import {VSpace} from "./components/Vspace";
import {Users} from "./components/Users/Users";
import {useSelector} from "react-redux";
import {Games} from "./components/Games/Games";

function App() {
    const tables = useSelector((state) => state.tables);

    return (
        <div className="wrapper">
            <h1 className="title">Games dashboard App</h1>
            <VSpace size='m' />
            <Nav />
            <VSpace size='m' />
            {tables.name === 'Users' && <Users />}
            {tables.name === 'Games' && <Games />}
        </div>
    );
}

export default App;
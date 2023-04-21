import {useSelector} from "react-redux";
import {useCreatable} from "../../hooks";
import {Filters} from "../Filters/Filters";
import React from "react";
import {GameFilters} from "../Filters/GameFilters";
import {VSpace} from "../Vspace";
import {NewGameRow} from "./NewGameRow";
import {GamesRow} from "./GamesRow";
import {CreateButton} from "../CreateButton/CreateButton";

const names = [
    { id: 1, string: 'Name' },
    { id: 2, string: 'Game category' },
    { id: 3, string: 'Created date' },
];

export const Games = () => {
    const games = useSelector((state) => state.games ?? []);
    const filteredGames = useSelector((state) => state.filteredGames ?? []);
    const isFiltered = useSelector((state) => state.isFiltered);
    const { isCreatable, handleToggle } = useCreatable();

    const renderGames = isFiltered ? filteredGames : games;

    return (
        <>
            <Filters>
                <GameFilters />
            </Filters>
            <VSpace size='m' />
            <CreateButton onClick={handleToggle} />
            <VSpace size='m' />
            <div className='table-head'>
                <div className='table-row__cells'>
                    {names.map((name) => (
                        <span key={name.id} className='users-cell'>{name.string}</span>
                    ))}
                </div>
            </div>
            <VSpace size='m' />
            {isCreatable &&
                <>
                    <NewGameRow onClick={handleToggle} />
                    <VSpace size='m' />
                </>
            }
            {renderGames.map((game) => (
                <React.Fragment key={game.id}>
                    <GamesRow game={game} />
                    <VSpace size='m' />
                </React.Fragment>
            ))}
        </>
    )
}
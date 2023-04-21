import {useState} from "react";

export const useGameInput = () => {
    const [name, setName] = useState('');
    const [gameCategory, setGameCategory] = useState('');
    const [createdDate, setCreatedDate] = useState('');

    return {
        name, gameCategory, createdDate, setName, setGameCategory, setCreatedDate
    }
}
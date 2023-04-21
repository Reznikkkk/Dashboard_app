import {useState} from "react";

export const useUserInput = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');

    return {
        name, email, address, setName, setEmail, setAddress
    }
}
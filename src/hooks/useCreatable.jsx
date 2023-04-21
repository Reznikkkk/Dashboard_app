import {useState} from "react";

export const useCreatable = () => {
    const [isCreatable, setCreatable] = useState(false);
    const handleToggle = () => setCreatable(!isCreatable);

    return { isCreatable, handleToggle };
};

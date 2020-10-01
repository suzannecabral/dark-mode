import { useState } from "react";

//usage: const [name, setName] = useLocalStorage('name', 'Dustin')
export const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        //save state
        setStoredValue(value);
        //save to localstorage
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue,setStoredValue];
};
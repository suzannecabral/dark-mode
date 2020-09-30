import { useState } from "react";

//usage: const [name, setName] = useLocalStorage('name', 'Dustin')

export const useLocalStorage = (key,initialValue) => {

    // to retreive an item from localstorage, call localStorage.getItem('itemName')
    // if that item doesn't exist, it will return undefined
    const [ storedValue, setStoredValue ] = useState(() => {

        //get from local storage by key
        const item = window.localStorage.getItem(key);

        const setStoredValue = value => {
            //save state
            setStoredValue(value);
            //save to local storage
            window.localStorage.setItem(key, JSON.stringify(value));
        };

        //parse and return stored json
        //or if undefined, return initialValue
        return item ? JSON.parse(item) : initialValue;

});
    return [storedValue, setStoredValue];
}

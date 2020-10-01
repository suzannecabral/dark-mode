import { useState } from "react";

//usage: const [name, setName] = useLocalStorage('name', 'Dustin')

export const useLocalStorage = (key,initialValue) => {
    console.log("useLocalStorage fired: (key, initialValue) ",key,initialValue)
    // to retreive an item from localstorage, call localStorage.getItem('itemName')
    // if that item doesn't exist, it will return undefined
    const [ storedValue, setStoredValue ] = useState(() => {
        console.log("localStorage: storedValue state created")
        

        //get from local storage by key
        const item = window.localStorage.getItem(key);
        console.log("localStorage item:", item)

        const setStoredValue = value => {
            console.log("setStoredValue fired")

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

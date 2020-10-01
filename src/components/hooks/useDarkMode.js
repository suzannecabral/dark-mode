import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (value) => {

    //useLocalStorage:
    //usage: const [name, setName] = useLocalStorage('name', 'Dustin')
    
    const [darkMode, setDarkMode] = useLocalStorage("darkmode",value);
    return [darkMode, setDarkMode];

}
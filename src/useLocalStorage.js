import {useState} from "react";

const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(() => {
        const value = window.localStorage.getItem(key);

        return value ? value : initialValue;
    });

    const setValue = (value) => {

        setStoredValue(value);
        window.localStorage.setItem(key, value);
    };

    return [storedValue, setValue];
};

export default useLocalStorage;
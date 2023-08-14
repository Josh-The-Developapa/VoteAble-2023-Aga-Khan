import { createContext } from "react";

const Context = createContext({
    isDrop: false,
    setIsDropVal: () => { },
    message: null,
    setMessageValFunc: () => { },
    currentYear: new Date().getFullYear()
});

export default Context;
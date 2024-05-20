import { createContext, useContext } from "react";

import momoContext from "../contexts/momoContext";

function useMomo() {
    const momos =useContext(momoContext);
    return momos;
}

export default useMomo;

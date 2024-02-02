import {Route, Routes} from "react-router-dom";
import Register from "./Pages/Register/Register";
import Authorization from "./Pages/Authorization/Authorization";
import Account from "./Pages/Account/Account";
import {useContext} from "react";
import {AuthContext} from "./Context/AuthContext";

const Router = () => {
    const {Auth} = useContext(AuthContext)

    return (
        Auth
        ?
        <Routes>
            <Route path="/account" element={<Account/>}></Route>
        </Routes>
        :
        <Routes>
            <Route path="/register" element={<Register/>}></Route>
            <Route path="/authorization" element={<Authorization/>}></Route>
            <Route path="*" element={<Register/>}></Route>
        </Routes>
    )
}

export default Router;
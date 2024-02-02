import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppRouter from "./AppRouter";
import {AuthContext} from "./Context/AuthContext";
import {useState} from "react";
import {UserContext} from "./Context/UserContext";

function App() {
    const [Auth, setAuth] = useState(false)
    const [User, setUser] = useState(
        {
            name: "Стас Барецкий",
            login: "stas@baretskii.su",
            height: "1.75м",
            weight:"200кг"
        })

  return (
      <UserContext.Provider value={{User, setUser}}>
            <AuthContext.Provider value={{Auth, setAuth}}>
                <BrowserRouter>
                    <AppRouter/>
                </BrowserRouter>
            </AuthContext.Provider>
      </UserContext.Provider>
  );
}

export default App;

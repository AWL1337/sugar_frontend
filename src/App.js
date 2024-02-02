import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppRouter from "./AppRouter";
import {AuthContext} from "./Context/AuthContext";
import {useState} from "react";
import {UserContext} from "./Context/UserContext";

function App() {
    const [Auth, setAuth] = useState(false)
    const [userName, setUserName] = useState("Стас Барецкий")
    const [userLogin, setUserLogin] = useState("stas@baretskii.su")
    const [userHeight, setUserHeight] = useState("1.75м")
    const [userWeight, setUserWeight] = useState("200кг")

  return (
      <UserContext.Provider value={{userName, userLogin, userHeight, userWeight, setUserName, setUserLogin, setUserHeight, setUserWeight}}>
            <AuthContext.Provider value={{Auth, setAuth}}>
                <BrowserRouter>
                    <AppRouter/>
                </BrowserRouter>
            </AuthContext.Provider>
      </UserContext.Provider>
  );
}

export default App;

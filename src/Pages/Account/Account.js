import s from "../../Components/UI/Wrapper.module.css"
import s1 from "./Account.module.css"
import Header from "../../Components/Header/AccountHeader/Header";
import PlaceHolder from "../../Components/UI/PlaceHolder/PlaceHolder";
import {useContext} from "react";
import {UserContext} from "../../Context/UserContext";
const Account = () => {
    const {userName, userLogin, userHeight, userWeight} = useContext(UserContext)
    return (
        <div className={s.Wrapper}>
            <Header/>
            <div className={s1.Body}>
                <div className={s1.Form}>
                    <img src={process.env.PUBLIC_URL + "/Group 14.svg"} alt={"12"}/>
                    <PlaceHolder>Имя: {userName}</PlaceHolder>
                    <PlaceHolder>Логин: {userLogin}</PlaceHolder>
                    <PlaceHolder>Ваши показатели</PlaceHolder>
                    <PlaceHolder>Рост: {userHeight}</PlaceHolder>
                    <PlaceHolder>Вес: {userWeight}</PlaceHolder>
                </div>
            </div>
        </div>
    );
}

export default Account;
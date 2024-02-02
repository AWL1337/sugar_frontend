import s from "../../Components/UI/Wrapper.module.css"
import s1 from "./Register.module.css"
import Header from "../../Components/Header/NavBarHeader/Header";
import BorderInput from "../../Components/UI/Input/BorderInput";
import BorderButton from "../../Components/UI/Button/BorderButton";
import {useContext} from "react";
import {UserContext} from "../../Context/UserContext";
import {AuthContext} from "../../Context/AuthContext";
const Register = () => {
    const {setUserName, setUserLogin, setUserHeight, setUserWeight} = useContext(UserContext)
    const {setAuth} = useContext(AuthContext)

    const regstrate = (formData) => {
        setAuth(true)
        setUserName(formData.get("name"))
        setUserLogin(formData.get("login"))
        setUserName(formData.get("name"))
        setUserName(formData.get("name"))


    return (
        <div className={s.Wrapper}>
            <Header/>
            <div className={s1.Body}>
                <form className={s1.Form} onSubmit={regstrate}>
                    <div><h2 className={s1.Header}>Регистрация</h2></div>
                    <BorderInput placeholder={'Имя'} name={"name"}/>
                    <BorderInput placeholder={'Логин'} name={"login"}/>
                    <BorderInput placeholder={'Пароль'} name={"password"}/>
                    <BorderButton type={"submit"}>далее</BorderButton>
                </form>
            </div>
        </div>
    );
}}

export default Register;
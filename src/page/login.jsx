import Header from "../component/header"
import styles from './login.module.css'
import imgLogin from '../img/imgLogin.jpg'
import { useEffect, useState } from "react"
import useGetUserID from "../hook/CheckDataUser"

const Login = ()=> {
    const [buttonLogin] = useState(false)
    const [userEmail, setUserEmail] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const { getUserID , errorGetUserID, loadingGetUserID, dataGetUserID } = useGetUserID(userEmail, userPassword);
    
    const GetDataByID = () => {
        getUserID({variables : {
            email : userEmail,
            password : userPassword,
        }});
    }

    const onChangeUserEmail = (e)=> {
        if(e.target) {
            setUserEmail(e.target.value)
        }
    }

    const onChangeUserPassword = (e)=> {
        if(e.target) {
            setUserPassword(e.target.value)
        }
    }

    localStorage.setItem("User", JSON.stringify(dataGetUserID?.user));

    // console.log(userEmail)
    // console.log(userPassword)
    // console.log(dataGetUserID?.user)

    return (
        <div className={styles.wrapper}>
            <Header btnLogin={buttonLogin}/>
            <div className={styles.container}>
                <div className={styles.imgLogin}>
                    <img src={imgLogin} alt="Food Recipe" style={{width: "100%", height: "100%"}}/>
                </div>
                <div className={styles.wrapForm}>
                        <label htmlFor="email" className={styles.label}>
                                Email
                        </label>
                        <input id="email" name="email" type="text" className={styles.input} value={userEmail}onChange={onChangeUserEmail}/>
                        <label htmlFor="password" className={styles.label}>
                                Password                              
                        </label>
                        <input id="password" name="password" type="text" className={styles.input} value={userPassword} onChange={onChangeUserPassword}/>
                        <input type="submit" className={styles.submit} onClick={GetDataByID}/>
                </div>
            </div>
        </div>
    )
}

export default Login;
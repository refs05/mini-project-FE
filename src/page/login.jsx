import Header from "../component/header"
import styles from './login.module.css'
import imgLogin from '../img/imgLogin.jpg'
import { useState } from "react"

const Login = ()=> {
    const [buttonLogin] = useState(false)

    return (
        <div className={styles.wrapper}>
            <Header btnLogin={buttonLogin}/>
            <div className={styles.container}>
                    <div className={styles.imgLogin}>
                        <img src={imgLogin} alt="Food Recipe" style={{width: "100%", height: "100%"}}/>
                    </div>
                    <div className={styles.wrapForm}>
                        <form action="">
                            <label htmlFor="email" className={styles.label}>
                                Email
                            </label>
                            <input id="email" name="email" type="text" className={styles.input}/>
                            <label htmlFor="password" className={styles.label}>
                                Password                              
                            </label>
                            <input id="password" name="password" type="text" className={styles.input}/>
                            <input type="submit" className={styles.submit}/>
                        </form>
                    </div>
            </div>
        </div>
    )
}

export default Login;
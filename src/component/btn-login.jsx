
import styles from './btn-login.module.css'

const ButtonLogin = ()=> {
    return (
        <div className={styles.btnLogin}>
            Login
        </div>
    )
}

const HideLogin = ()=> {
    return (
        <div className={styles.hideLogin}>   

        </div>
    )
}

export {ButtonLogin, HideLogin};
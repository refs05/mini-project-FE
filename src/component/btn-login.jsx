import { Link } from 'react-router-dom'
import styles from './btn-login.module.css'

const ButtonLogin = ()=> {
    return (
        <div className={styles.btnLogin}>
            <Link to="/login" className={styles.linkLogin}>
                    Login
            </Link>
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
import {ButtonLogin, HideLogin} from "./btn-login"
import styles from '../component/header.module.css'
import logo from '../img/Logo.png'

const Header = (props)=> {
    return (
        <div className="header">
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <img src={logo} alt="Logo Food Recipe" style={{width: "100%", height: "100%"}}/>
                </div>
                <div className={styles.nav}>
                    <div className={styles.navItem}>Home</div>
                    <div className={styles.navItem}>Search</div>
                    <div className={styles.navItem}>Trending</div>
                    <div className={styles.navItem}>About</div>
                </div>
                {props.btnLogin ? <ButtonLogin /> : <HideLogin/>}
            </div>
        </div>
    )
}

export default Header;
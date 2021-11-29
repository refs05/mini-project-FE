import {ButtonLogin, HideLogin} from "./btn-login"
import styles from '../component/header.module.css'
import logo from '../img/Logo.png'
import { Link } from "react-router-dom"

const Header = (props)=> {
    return (
        <div className="header">
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <img src={logo} alt="Logo Food Recipe" style={{width: "100%", height: "100%"}}/>
                </div>
                <div className={styles.nav}>
                    <div className={styles.navItem}>
                        <Link to="/" style={{textDecoration:"none", color:"#6253BD"}}>
                            <div className={styles.linkHome}>
                                Home
                            </div>
                        </Link>
                    </div>
                    <div className={styles.navItem}>
                        <Link to="/search" style={{textDecoration:"none", color:"#6253BD"}}>
                            <div className={styles.linkHome}>
                                Search
                            </div>
                        </Link>
                    </div>
                    <div className={styles.navItem}>
                        <Link to="/" style={{textDecoration:"none", color:"#6253BD"}}>
                            <div className={styles.linkHome}>
                                Trending
                            </div>
                        </Link>
                    </div>
                    <div className={styles.navItem}>
                        <Link to="/" style={{textDecoration:"none", color:"#6253BD"}}>
                            <div className={styles.linkHome}>
                                About
                            </div>
                        </Link>
                    </div>
                </div>
                {props.btnLogin ? <ButtonLogin /> : <HideLogin/>}
            </div>
        </div>
    )
}

export default Header;
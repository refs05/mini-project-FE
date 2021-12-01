import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './btn-login.module.css'
import { useEffect } from 'react'

const StatusLog = (props)=> {
    const [statusLog, setStatusLog] = useState(false)
    let retrievedObject = localStorage.getItem('User')
    let dataLocal = JSON.parse(retrievedObject);

    useEffect(() => {
        if(dataLocal == null) {
            return null
        } else {
            if (dataLocal[0]?.__typename === "user") {
                return setStatusLog(true);
            }
        }
    }, [])

    
    const Logout = ()=> {
        localStorage.removeItem("User")
        setStatusLog(!statusLog)
    }

    return (
        <>
            {statusLog? <div className={styles.btnLogout} >
            <div>{props.email}</div>
            <Link to="/" className={styles.linkLogout} onClick={Logout}>
                    Logout
            </Link>
            </div> : <div className={styles.btnLogin}>
            <Link to="/login" className={styles.linkLogin}>
                    Login
            </Link>
            </div>} 
        </>
    )
}


const HideLogin = ()=> {
    return (
        <div className={styles.hideLogin}>   
            
        </div>
    )
}

export {StatusLog, HideLogin};
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './btn-login.module.css'

// const ButtonLogin = ()=> {

//     return (
//         <div className={styles.btnLogin}>
//             <Link to="/login" className={styles.linkLogin}>
//                     Login
//             </Link>
//         </div>
//     )
// }

const StatusLog = ()=> {
    const [statusLog, setStatusLog] = useState(false)
    let retrievedObject = localStorage.getItem('User')
    let dataLocal = JSON.parse(retrievedObject);
    // console.log(dataLocal[0].__typename)
    
    return (
        // <div>
        //     {statusLog? <ButtonLogout /> : <ButtonLogin />} 
        // </div>
        <div className={styles.btnLogin} >
            <Link to="/login" className={styles.linkLogin}>
                    {statusLog? "Logout" : "Login"}
            </Link>
            {/* <Link to="/login" className={styles.linkLogin}>
                    {statusLog? "Logout" : "Login"}
            </Link> */}
        </div>
    )
}

// const ButtonLogout = ()=> {
//     localStorage.removeItem("User")
//     return (
//         <div className={styles.btnLogin}>
//             <Link to="/" className={styles.linkLogin}>
//                     Logout
//             </Link>
//         </div>
//     )
// }

const HideLogin = ()=> {
    return (
        <div className={styles.hideLogin}>   
            
        </div>
    )
}

export {StatusLog, HideLogin};
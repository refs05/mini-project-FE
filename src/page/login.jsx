import Header from "../component/header"
import styles from './login.module.css'
import imgLogin from '../img/imgLogin.jpg'
import { useEffect, useState } from "react"
import useGetUserID from "../hook/CheckDataUser"
import { Link, useNavigate } from "react-router-dom"

const baseData = {
    email: "",
    password: ""
}

const baseError = {
    email: "",
    password: ""
}


const regexCharacters = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Login = ()=> {
    const [buttonLogin] = useState(false)
    const [data, setData] = useState(baseData);
    const [errors, setError] = useState(baseError);
    const navigate = useNavigate()

    const { getUserID , errorGetUserID, loadingGetUserID, dataGetUserID } = useGetUserID(data.email, data.password);

    function handleError(name, message) {
        setError((prev) => ({ ...prev, [name]: message }));
    }

    useEffect(() => {
        localStorage.clear()
        if (dataGetUserID?.user.length == 1) {
          localStorage.setItem("User", JSON.stringify(dataGetUserID?.user));
          alert("Login Success")
          navigate("/");
        } else if (dataGetUserID?.user.length == 0) {
            alert("Login Fail")
        }
    }, [dataGetUserID?.user]);

    console.log(dataGetUserID)

    function changeHandler(e) {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "email") {
            if (value.length > 0 && !value.includes("@")) {
                handleError(name, "missing @");
            } else if (!regexEmail.test(value)) {
                handleError(name, "missing domain (eg: .com, .co.id, etc)")
            } else {
                handleError(name, "");
            }
        }

        if (name === "password") {
            if (!regexCharacters.test(value)) {
                handleError(name, "minimum eight characters, at least one letter and one number");
            } else {
                handleError(name, "");
            }
        }

        setData((prev) => ({ ...prev, [name]: value }));
    }

    function submitHandler(e) {
        e.preventDefault();
        let isValid = true;

        getUserID({variables : {
            email : data.email,
            password : data.password,
        }});

        if (!data.email.includes("@")) {
            handleError("email", "missing @");
            isValid = false;
        } else if (!regexEmail.test(data.email)) {
            handleError("email", "missing domain (eg: .com, .co.id, etc)");
            isValid = false;
        }

        if (!regexCharacters.test(data.password)) {
            handleError("password", "minimum eight characters, at least one letter and one number");
            isValid = false;
        } else if (data.password.trim().length === 0) {
            handleError("password", "password cannot be empty");
            isValid = false;
        }

        if (isValid) {
            const keys = Object.keys(errors);
            isValid = isValid && keys.every((key) => errors[key] === "");
            if (isValid && dataGetUserID?.user.length == 1) {
                alert(`Login Success`);
            } 
        } else {
            alert("Login Fail");
        }
        
    }   
    
    
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
                        <input id="email" name="email" type="text" className={styles.input} value={data.email}onChange={changeHandler} required/>
                        <div className={styles.error}>{errors.email}</div>
                        <label htmlFor="password" className={styles.label}>
                                Password                              
                        </label>
                        <input id="password" name="password" type="text" className={styles.input} value={data.password} onChange={changeHandler} required/>
                        <div className={styles.error}>{errors.password}</div>
                        <Link to="/" style={{textDecoration: "none"}}>
                            <input type="submit" className={styles.submit} onClick={submitHandler}/>
                        </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;
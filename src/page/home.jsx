import Header from "../component/header"
import { useState } from "react"
import styles from './home.module.css'
import { ListFood } from "../component/listFood"
import Footer from "../component/footer"
import { Link } from "react-router-dom"
import useStoreFeedBack from "../hook/StoreFeedBack"
import { useEffect } from "react"
import useGetTrending from "../hook/GetTrending"

const Home = ()=> {
    const [buttonLogin] = useState(true)
    const [userFeedBack, setUserFeedBack] = useState("")
    const [userEmail, setUserEmail] = useState("")

    const { storeFeedBack, loadingStore } = useStoreFeedBack(userFeedBack);

    let retrievedObject = localStorage.getItem('User')
    let dataLocal = JSON.parse(retrievedObject);

    const [trending, setTrending] = useState([]);
    const { errorGetTrending, loadingGetTrending, dataGetTrending } = useGetTrending();

    useEffect(() => {
        if (dataGetTrending) {
            setTrending(dataGetTrending.recipe);
        }
    }, [dataGetTrending])

    useEffect(() => {
        if(dataLocal == null) {
            return null
        } else if (dataLocal == undefined){
            return null
        } else {
            if (dataLocal[0]?.__typename === "user") {
                return setUserEmail(dataLocal[0]?.email)
            }
        }
    }, [])

    const onChangeFeedBack = (e)=> {
        if(e.target) {
            setUserFeedBack(e.target.value)
        }
    }

        if (loadingGetTrending) {
            return "Fetching Data...."
        }

        if (errorGetTrending) {
            return "Fetching Data Error"
        }

    const InsertFeedBack = () => {
        storeFeedBack({variables: {
            message: userFeedBack,
        }})
        setUserFeedBack("")
    }

    return (
        <div >
            <Header btnLogin={buttonLogin} email={userEmail}/>
            <div className={styles.container}>
                <div className={styles.greet}>
                    <div className={styles.titleGreet}>
                        <div className={styles.firstGreet}>It’s All About Indonesian</div>
                        <div className={styles.firstGreet}>Recipes. Get The Recipe</div>
                        <div className={styles.firstGreet}>What You Want !</div>
                        <div className={styles.secondGreet1}>Welcome !</div>
                        <div className={styles.secondGreet}>Search Your Favorite Recipe !</div>
                        <div><Link to="/search" className={styles.btnCheck}>
                            Check Now
                            </Link>
                        </div>
                    </div>
                    <div className={styles.imgGreet}>
                        <div>
                            {trending.slice(0,2).map((item, index) => (
                                <img key={index} src={item.thumb} alt="Recipe Food" className={styles.imgRandom} />
                            ))}
                        </div>
                        <div>
                            {trending.slice(2,5).map((item, index) => (
                                <img key={index} src={item.thumb} alt="Recipe Food" className={styles.imgRandom} />
                            ))}
                        </div>
                        <div>
                            {trending.slice(5,7).map((item, index) => (
                                <img key={index} src={item.thumb} alt="Recipe Food" className={styles.imgRandom} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.content} id="trending">
                    <div className={styles.title}>
                        <hr />
                        <div className={styles.subtitle}>Trending Recipes</div>
                        <hr />
                    </div>
                    <ListFood trending={trending}/>
                </div>
                <div className={styles.content} id="about">
                    <div className={styles.title}>
                        <hr />
                        <div className={styles.subtitle}>About</div>
                        <hr />
                    </div>
                    <div className={styles.message}>
                        <div>This Website is contain a lot of Indonesian Food’s  Recipes.</div>
                        <div>The purpose of this website is to help people to find the recipe.</div>
                        <div>The people also can give comment and likes on every recipe.</div>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <hr />
                        <div className={styles.subtitle}>Message For Us</div>
                        <hr />
                    </div>
                    <div className={styles.formFeed}>
                            <div className={styles.wrapFormFeed}>
                                <textarea name="" id="" cols="30" rows="4" value={userFeedBack} onChange={onChangeFeedBack}/>
                                <button onClick={InsertFeedBack}>Send</button>
                            </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;
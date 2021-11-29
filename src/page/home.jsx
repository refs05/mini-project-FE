import Header from "../component/header"
import { useState } from "react"
import styles from './home.module.css'
import imgGreet from '../img/pangsitJepang.jpg'
import { ListFood } from "../component/listFood"
import Footer from "../component/footer"
import { Link } from "react-router-dom"
import useStoreFeedBack from "../hook/StoreFeedBack"

const Home = ()=> {
    const [buttonLogin] = useState(true)

    const [userFeedBack, setUserFeedBack] = useState("")

    const { storeFeedBack, loadingStore } = useStoreFeedBack(userFeedBack);

    const onChangeFeedBack = (e)=> {
        if(e.target) {
            setUserFeedBack(e.target.value)
        }
    }

    const InsertFeedBack = () => {
        storeFeedBack({variables: {
            message: userFeedBack,
        }})
        setUserFeedBack("")
    }
    return (
        <div >
            <Header btnLogin={buttonLogin}/>
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
                            <img src={imgGreet} alt="Recipe Food" className={styles.imgRandom} />
                            <img src={imgGreet} alt="Recipe Food" className={styles.imgRandom} />
                        </div>
                        <div>
                            <img src={imgGreet} alt="Recipe Food" className={styles.imgRandom} />
                            <img src={imgGreet} alt="Recipe Food" className={styles.imgRandom} />
                            <img src={imgGreet} alt="Recipe Food" className={styles.imgRandom} />
                        </div>
                        <div>
                            <img src={imgGreet} alt="Recipe Food" className={styles.imgRandom} />
                            <img src={imgGreet} alt="Recipe Food" className={styles.imgRandom} />
                        </div>
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <hr />
                        <div className={styles.subtitle}>Trending Recipes</div>
                        <hr />
                    </div>
                    <ListFood />
                </div>
                <div className={styles.content}>
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
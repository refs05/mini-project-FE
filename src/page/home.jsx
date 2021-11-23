import Header from "../component/header"
import { useState } from "react"
import styles from './home.module.css'
import imgGreet from '../img/pangsitJepang.jpg'
import ListFood from "../component/listFood"

const Home = ()=> {
    const [buttonLogin] = useState(true)

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
                        <div className={styles.btnCheck}>
                            Check Now
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
                    <div>
                    This Website is contain a lot of Indonesian Food’s  Recipes. The purpose of this website is to help people to find the recipe. The people also can give comment and likes on every recipe.
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>
                        <hr />
                        <div className={styles.subtitle}>Message For Us</div>
                        <hr />
                    </div>
                    <div className={styles.formFeed}>
                            <textarea name="" id="" cols="30" rows="10"/>
                            <button>Send</button>
                    </div>
                </div>
                <div className="footer">
                    <div className="contact"></div>
                    <div className="information"></div>
                    <div className="address"></div>
                    <div className="copyright"></div>
                </div>
            </div>
        </div>
    )
}

export default Home;
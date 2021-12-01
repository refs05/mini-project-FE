import styles from './listFood.module.css'
import FoodItem from './foodItem'
import useGetTrending from '../hook/GetTrending'
import { useState, useEffect } from 'react'
import useGetAllRecipe from '../hook/GetAllRecipe'

const ListFood = (props)=> {

    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <div className={styles.trendFood}>
                        <div className={styles.wrapList}>
                            {props.trending.slice(0, 3).map((item, index) => (
                                <FoodItem key={index} recipe={item}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <div className={styles.trendFood}>
                        <div className={styles.wrapList}>
                            {props.trending.slice(3, 6).map((item, index) => (
                                <FoodItem key={index} recipe={item}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

const ListFoodSearch = ()=> {
    const [allrecipe, setAllRecipe] = useState([]);
    const { errorGetAllRecipe, loadingGetAllRecipe, dataGetAllRecipe } = useGetAllRecipe();

    useEffect(() => {
        if (dataGetAllRecipe) {
            setAllRecipe(dataGetAllRecipe.recipe);
        }
    }, [dataGetAllRecipe])

    // console.log(dataGetAllRecipe?.recipe)
    if(loadingGetAllRecipe) {
        return "Fetching Recipes...."
    }
    if(errorGetAllRecipe) {
        return "Fetching Recipes Error...."
    }

    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <div className={styles.trendFood}>
                        <div className={styles.searchList}>
                            {allrecipe.slice(0, 7).map((item, index) => (
                                <FoodItem key={index} recipe={item}/>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <div className={styles.trendFood}>
                        <div className={styles.searchList}>
                            <FoodItem />
                            <FoodItem />
                            <FoodItem />
                            <FoodItem />
                            <FoodItem />
                            <FoodItem />
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className={styles.trendFood}>
                        <div className={styles.searchList}>
                            <FoodItem />
                            <FoodItem />
                            <FoodItem />
                            <FoodItem />
                            <FoodItem />
                            <FoodItem />
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export { ListFood, ListFoodSearch}
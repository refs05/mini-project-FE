import { Link } from "react-router-dom"
import styles from './foodItem.module.css'
import like from '../img/like.png'
import comment from '../img/comment.png'

const FoodItem = (props) => {
    console.log(props.recipe?.thumb)
    return (
        <div className={styles.wrapFood}>
            <img src={props.recipe?.thumb} alt="" className={styles.imgTrending} />
            <div className={styles.descTitle}>{props.recipe?.title}</div>
            <div className={styles.descDiff}>Kesulitan : {props.recipe?.difficulty}</div>
            <div className={styles.likeComm}>
                <div className={styles.likes}>
                    <img src={like} alt="" className={styles.imgLike} />
                    <p>{props.recipe?.like}</p>
                </div>
                <div className={styles.comment}>
                    <img src={comment} alt="" className={styles.imgComment} />
                    <p>{props.recipe?.comments.length}</p>
                </div>
            </div>
            <Link to={`/detail/${props.recipe?.id}`} style={{textDecoration: "none"}}>
                <div className={styles.checkRecipe}>
                    Check Recipe
                </div>
            </Link>
        </div>
    )
}

export default FoodItem
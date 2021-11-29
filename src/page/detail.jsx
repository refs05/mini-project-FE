import { useEffect, useState } from "react";
import Footer from "../component/footer";
import Header from "../component/header";
import styles from './detail.module.css'
import send from '../img/send.png'
import { useParams } from "react-router-dom";
import useGetRecipeByID from "../hook/GetRecipeByID";
import useStoreComment from "../hook/StoreComment";
import useGetComment from "../hook/GetComment";
import useLikeSubs from "../hook/LikeSubs";
import useUpdateLike from "../hook/UpdateLike";
import useUnLike from "../hook/UnLike";

const WillLike = ()=> {
    let { id } = useParams()
    const { updateLike, loadingLike } = useUpdateLike(id);

    const AddLike = () => {
        updateLike({variables: {
            id: id
        }})
    }
    return (
        <div className={styles.likeBtn} onClick={AddLike}>Like This</div>
    )
}

const UnLike = ()=> {
    let { id } = useParams()
    const { unLike, loadingLike } = useUnLike(id);

    const DeLike = () => {
        unLike({variables: {
            id: id
        }})
    }
    return (
        <div className={styles.likedBtn} onClick={DeLike}>Liked</div>
    )
}

const Detail = ()=> {
    let { id } = useParams()
    const [dataRecipe, setDataRecipe] = useState([])
    const [dataComment, setDataComment] = useState([])
    const [userComment, setUserComment] = useState("")
    const [likeSubs, setLikeSubs] = useState({})

    let retrievedObject = localStorage.getItem('User')
    let dataLocal = JSON.parse(retrievedObject);

    const { dataLikeSubs, loadingLikeSubs, errorLikeSubs } = useLikeSubs(id);
    const { errorGetRecipeByID, loadingGetRecipeByID, dataGetRecipeByID } = useGetRecipeByID(id);
    const { storeComment, loadingStore } = useStoreComment(userComment, id, dataLocal[0].id);
    const { errorGetComment, loadingGetComment, dataGetComment, refetch } = useGetComment(id);

    const [buttonLogin] = useState(true)
    const [likeButton, setLikeButton] = useState(false)

    useEffect(() => {
        if (dataGetRecipeByID) {
            setDataRecipe(dataGetRecipeByID.recipe);
        }
    }, [dataGetRecipeByID])

    useEffect(() => {
        if (dataGetComment) {
            refetch();
            setDataComment(dataGetComment.comment);
        }
    }, [dataGetComment])

    useEffect(() => {
        if (dataLikeSubs) {
            setLikeSubs(dataLikeSubs.recipe);
        }
    }, [dataLikeSubs])

    const onChangeComment = (e)=> {
        if(e.target) {
            setUserComment(e.target.value)
        }
    }

    const InsertComment = () => {
        storeComment({variables: {
            comment: userComment,
            recipe_id: id,
            user_id: dataLocal[0].id
        }})
        setUserComment("")
    }
    

    // console.log(dataComment)
    // console.log(dataLikeSubs)
    console.log(likeSubs[0]?.like)
    return (
        <div>
            <Header btnLogin={buttonLogin}/>
                <div className={styles.container}>
                    <div className={styles.foodName}>
                        {dataRecipe[0]?.title}
                    </div>
                    <div className={styles.foodInfo}>
                        <img src={dataRecipe[0]?.thumb} alt="" className={styles.foodImg}/>
                        <div className={styles.foodDetail}>
                            <div className={styles.titleDetail}>Detail Recipe</div>
                            <div className="infoDetail">Time : {dataRecipe[0]?.time} menit</div>
                            <div className="infoDetail">Porsi : {dataRecipe[0]?.portion}</div>
                            <div className="infoDetail">Difficulty : {dataRecipe[0]?.difficulty}</div>
                            <div>Publisher : {dataRecipe[0]?.publisher}</div>
                            <div>Publish Date : {dataRecipe[0]?.datePublish}</div>
                            <div className="infoDetail">Likes : {likeSubs[0]?.like}</div>
                            {/* <div className={likeButton ? <UnLike /> : <WillLike />} onClick={()=> setLikeButton(status => !status)}>{likeButton ? "Liked" : "Like This"}</div> */}
                            <div onClick={()=>setLikeButton(status => !status)}>{likeButton ? <UnLike /> : <WillLike />}</div>
                            
                        </div>
                    </div>
                    <div className={styles.descIng}>
                        <div className={styles.desc}>
                            <div className={styles.title}>Description</div>
                            <div className={styles.contentDesc}>{dataRecipe[0]?.desc}</div>
                        </div>
                        <div className={styles.ingredient}>
                            <div className={styles.title}>Ingredients</div>
                            <div className={styles.contentIng}>{dataRecipe[0]?.ingredient.map((item, index) => <div key={index}>{item}</div>)}</div>
                        </div>
                    </div>
                    <div className={styles.procedure}>
                        <div className={styles.title}>Procedures</div>
                        <div className={styles.contentPro}>{dataRecipe[0]?.step.map((item, index) => <div key={index}>{item}</div>)}</div>
                    </div>
                    <div className={styles.comment}>
                        <div className={styles.titleComm}>Comment</div>
                        <div className={styles.wrapComm}>   
                            {dataComment.map((item, index) => (
                                <div key={index} className="contentComm">
                                    <div className={styles.commenter}>{item.user.email}</div>
                                    <div className={styles.messComm}>{item.comment}</div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.userComm}>
                            <textarea name="" id="" cols="3" rows="2" className={styles.inputComm} placeholder="comment here..." value={userComment} onChange={onChangeComment}></textarea>
                            <div className={styles.send} onClick={InsertComment}>
                                <img src={send} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default Detail
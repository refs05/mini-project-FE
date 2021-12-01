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
import useUpdateComment from "../hook/EditComment";
import useDeleteComment from "../hook/DeleteComment";

const WillLike = ()=> {
    let { id } = useParams()
    const { updateLike, loadingLike } = useUpdateLike(id);

    let retrievedObject = localStorage.getItem('User')
    let dataLocal = JSON.parse(retrievedObject);

    const AddLike = () => {
        if(dataLocal == null) {
           return alert("Silahkan login terlebih dahulu")
        } else {
            updateLike({variables: {
                id: id
            }})
        }
    }
    return (
        <div className={styles.likeBtn} onClick={AddLike}>Like This</div>
    )
}

const UnLike = ()=> {
    let { id } = useParams()
    const { unLike, loadingLike } = useUnLike(id);

    let retrievedObject = localStorage.getItem('User')
    let dataLocal = JSON.parse(retrievedObject);

    const DeLike = () => {
        if(dataLocal == null) {
            return alert("Silahkan login terlebih dahulu")

        } else {
            unLike({variables: {
                id: id
            }})
        }
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
    const [userEmail, setUserEmail] = useState("")
    

    let validComment = null

    let retrievedObject = localStorage.getItem('User')
    let dataLocal = JSON.parse(retrievedObject);

    const { dataLikeSubs, errorLikeSubs } = useLikeSubs(id);
    const { errorGetRecipeByID, loadingGetRecipeByID, dataGetRecipeByID } = useGetRecipeByID(id);
    const { storeComment, loadingStore } = useStoreComment(userComment, id, validComment);
    const { errorGetComment, loadingGetComment, dataGetComment } = useGetComment(id);

    const [buttonLogin] = useState(true)
    const [likeButton, setLikeButton] = useState(false)

    useEffect(() => {
        if(dataLocal == null) {
            return validComment
        } else {
            if (dataLocal[0]?.__typename === "user") {
                validComment = dataLocal[0].id
                return setUserEmail(dataLocal[0]?.email)
            }
        }
    }, [])

    useEffect(() => {
        if (dataGetRecipeByID) {
            setDataRecipe(dataGetRecipeByID.recipe);
        }
    }, [dataGetRecipeByID])

    useEffect(() => {
        if (dataGetComment) {
            setDataComment(dataGetComment.comment);
        }
    }, [dataGetComment])

    useEffect(() => {
        if (dataLikeSubs) {
            setLikeSubs(dataLikeSubs.recipe);
        }
    }, [dataLikeSubs])

    if (loadingGetRecipeByID || loadingGetComment) {
        return "Fetching Data...."
    }

    if (errorLikeSubs || errorGetRecipeByID || errorGetComment) {
        return "Fetching Data Error"
    }

    const onChangeComment = (e)=> {
        if(e.target) {
            setUserComment(e.target.value)
        }
    }

    const InsertComment = () => {
        if(dataLocal == null) {
            return alert("Silahkan Login Terlebih Dahulu")
        } else {
            if (dataLocal[0]?.__typename === "user") {
                validComment = dataLocal[0].id
            }
        }   

        storeComment({variables: {
            comment: userComment,
            recipe_id: id,
            user_id: dataLocal[0].id
        }})
        setUserComment("")
    }

    console.log(dataComment[0])
    console.log(id)
    
    return (
        <div>
            <Header btnLogin={buttonLogin} email={userEmail}/>
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
                                <div key={index} className={styles.contentComm}>
                                    {item.user.email == userEmail ? <UserComment email={item.user.email} comment={item.comment} rec_id={id} id={item.id}/>: 
                                    <div>
                                        <div className={styles.commenter}>{item.user.email}</div>
                                        <div className={styles.messComm}>Said: "{item.comment}"</div>
                                    </div>
                                    }
                                </div>
                            ))}
                        </div>
                        <div className={styles.userComm}>
                            <textarea name="" id="" cols="3" rows="2" className={styles.inputComm} placeholder="comment here..." value={userComment} onChange={onChangeComment} required></textarea>
                            <div className={styles.send} onClick={InsertComment}>
                                <img src={send} alt="Send Button" />
                            </div>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

const UserComment = (props) => {
    const [editComment, setEditComment] = useState(false)
    const [userComment, setUserComment] = useState("")

    const { updateComment, loadingUpdate } = useUpdateComment(userComment, props.rec_id, props.email, props.id);
    const { deleteComment, loadingDelete } = useDeleteComment(props.id);

    const UpdateComment = () => { 

        updateComment({variables: {
            comment: userComment,
            rec_id: props.rec_id,
            email: props.email,
            id: props.id
        }})
        setUserComment("")
        setEditComment(!editComment)
    }

    const DeleteComment = () => { 
        deleteComment({variables: {
            id: props.id
        }})
    }

    const onChangeComment = (e)=> {
        if(e.target) {
            setUserComment(e.target.value)
        }
    }
    return (
        <>
            {editComment ? <>
            <textarea name="" id="" cols="3" rows="2" className={styles.inputComm} placeholder="comment here..." value={userComment} onChange={onChangeComment} required></textarea>
            <div className={styles.send} onClick={UpdateComment}>
                <img src={send} alt="Send Button" />
            </div>
            <div className={styles.cancelEdit} onClick={()=> setEditComment(!editComment)}>Cancel</div>
            </>
             :
                <>  
                    <div>
                        <div className={styles.commenter}>{props.email}</div>
                        <div className={styles.messComm}>Said: "{props.comment}"</div>
                    </div>
                    <div className={styles.wrapEditDel}>
                        <div onClick={()=> setEditComment(!editComment)} className={styles.editDel}>edit</div>
                        <div onClick={DeleteComment} className={styles.editDel}>delete</div>
                    </div>
                </>
            }
            
            
        </>
    )
}

export default Detail
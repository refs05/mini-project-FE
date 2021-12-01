import { useEffect, useState } from 'react'
import Footer from '../component/footer'
import Header from '../component/header'
import { ListFoodSearch } from '../component/listFood'
import styles from './search.module.css'
import useGetAllRecipe from '../hook/GetAllRecipe'
import { Link } from 'react-router-dom'

const Search = ()=> {
    const [buttonLogin] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [allrecipe, setAllRecipe] = useState([]);
    const [userEmail, setUserEmail] = useState("")

    const { errorGetAllRecipe, loadingGetAllRecipe, dataGetAllRecipe } = useGetAllRecipe();

    let retrievedObject = localStorage.getItem('User')
    let dataLocal = JSON.parse(retrievedObject);

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

    useEffect(() => {
        if (dataGetAllRecipe) {
            setAllRecipe(dataGetAllRecipe.recipe);
        }
    }, [dataGetAllRecipe])

    useEffect(()=> {
        const titles = allrecipe.map(item => ({id: item.id, title: item.title}))
        const results = titles.filter(function (item) {
            return item.id && item.title.toLowerCase().includes(searchTerm)
        })
        setSearchResult(results)
    }, [searchTerm])

    if (loadingGetAllRecipe) {
        return "Fetching Recipe..."
    }

    if (errorGetAllRecipe) {
        return "Fetching Recipe error"
    }

    const searchChange = (e)=> {
        setSearchTerm(e.target.value)
    }   
    
    return (
        <div className={styles.wrapper}>
            <Header btnLogin={buttonLogin} email={userEmail}/>
            <div className={styles.container}>
                <div className={styles.wrapSearch}>
                    <input type="text" className={styles.inputSearch} placeholder="type here..." onChange={searchChange}/>
                    <div className={styles.wrapResults}>
                        {searchResult.map((item, index) => (
                            <Link to={`/detail/${item.id}`} style={{textDecoration: "none"}}>
                                <div key={index} className={styles.result}>{item.title}</div>
                            </Link>
                        ))
                        }
                    </div>
                    <input type="submit" value="Search" className={styles.submitSearch}/>
                </div>
                
                <ListFoodSearch />
            </div>
            <Footer/>
        </div>
    )
}

export default Search
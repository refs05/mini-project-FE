import { useEffect, useState } from 'react'
import Footer from '../component/footer'
import Header from '../component/header'
import { ListFoodSearch } from '../component/listFood'
import styles from './search.module.css'
import useGetAllRecipe from '../hook/GetAllRecipe'

const Search = ()=> {
    const [buttonLogin] = useState(true)
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResult, setSearchResult] = useState([])
    const [allrecipe, setAllRecipe] = useState([]);

    const { errorGetAllRecipe, loadingGetAllRecipe, dataGetAllRecipe } = useGetAllRecipe();

    useEffect(() => {
        if (dataGetAllRecipe) {
            setAllRecipe(dataGetAllRecipe.recipe);
        }
    }, [dataGetAllRecipe])

    useEffect(()=> {
        const results = allrecipe.filter(item => item.title.toLowerCase().includes(searchTerm))
        setSearchResult(results)
    }, [searchTerm])

    const searchChange = (e)=> {
        setSearchTerm(e.target.value)
    }   

    console.log(allrecipe[0]?.title)
    console.log(searchResult)

    return (
        <div className={styles.wrapper}>
            <Header btnLogin={buttonLogin}/>
            <div className={styles.container}>
                <div className={styles.wrapSearch}>
                    <input type="text" className={styles.inputSearch} placeholder="type here..." onChange={searchChange}/>
                    <ul>
                        {searchResult.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    <input type="submit" value="Search" className={styles.submitSearch}/>
                </div>
                <ListFoodSearch />
            </div>
            <Footer/>
        </div>
    )
}

export default Search
import { useState } from 'react'
import Footer from '../component/footer'
import Header from '../component/header'
import { ListFoodSearch } from '../component/listFood'
import styles from './search.module.css'

const Search = ()=> {
    const [buttonLogin] = useState(true)

    return (
        <div className={styles.wrapper}>
            <Header btnLogin={buttonLogin}/>
            <div className={styles.container}>
                <div className={styles.wrapSearch}>
                    <input type="text" className={styles.inputSearch} placeholder="type here..."/>
                    <input type="submit" value="Search" className={styles.submitSearch}/>
                </div>
                <ListFoodSearch />
            </div>
            <Footer/>
        </div>
    )
}

export default Search
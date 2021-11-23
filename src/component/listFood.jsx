import imgFood from '../img/pangsitJepang.jpg'
import styles from './listFood.module.css'

const ListFood = ()=> {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <div className={styles.trendFood}>
                        <div className={styles.wrapList}>
                            <div className={styles.wrapFood}>
                                <img src={imgFood} alt="" className={styles.imgTrending} />
                                <div className={styles.descTitle}>Pangsit Jepang</div>
                                <div className={styles.descDiff}>Kesulitan : Mudah</div>

                            </div>
                            <div className={styles.wrapFood}>
                                <img src={imgFood} alt="" className={styles.imgTrending} />
                                <div className={styles.descTitle}>Pangsit Jepang</div>
                                <div className={styles.descDiff}>Kesulitan : Mudah</div>

                            </div>
                            <div className={styles.wrapFood}>
                                <img src={imgFood} alt="" className={styles.imgTrending} />
                                <div className={styles.descTitle}>Pangsit Jepang</div>
                                <div className={styles.descDiff}>Kesulitan : Mudah</div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <div className={styles.trendFood}>
                        <div className={styles.wrapList}>
                            <div className={styles.wrapFood}>
                                <img src={imgFood} alt="" className={styles.imgTrending} />
                                <div className={styles.descTitle}>Pangsit Jepang</div>
                                <div className={styles.descDiff}>Kesulitan : Mudah</div>

                            </div>
                            <div className={styles.wrapFood}>
                                <img src={imgFood} alt="" className={styles.imgTrending} />
                                <div className={styles.descTitle}>Pangsit Jepang</div>
                                <div className={styles.descDiff}>Kesulitan : Mudah</div>

                            </div>
                            <div className={styles.wrapFood}>
                                <img src={imgFood} alt="" className={styles.imgTrending} />
                                <div className={styles.descTitle}>Pangsit Jepang</div>
                                <div className={styles.descDiff}>Kesulitan : Mudah</div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className={styles.trendFood}>
                        <div className={styles.wrapList}>
                            <div className={styles.wrapFood}>
                                <img src={imgFood} alt="" className={styles.imgTrending} />
                                <div className={styles.descTitle}>Pangsit Jepang</div>
                                <div className={styles.descDiff}>Kesulitan : Mudah</div>

                            </div>
                            <div className={styles.wrapFood}>
                                <img src={imgFood} alt="" className={styles.imgTrending} />
                                <div className={styles.descTitle}>Pangsit Jepang</div>
                                <div className={styles.descDiff}>Kesulitan : Mudah</div>

                            </div>
                            <div className={styles.wrapFood}>
                                <img src={imgFood} alt="" className={styles.imgTrending} />
                                <div className={styles.descTitle}>Pangsit Jepang</div>
                                <div className={styles.descDiff}>Kesulitan : Mudah</div>

                            </div>
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

export default ListFood
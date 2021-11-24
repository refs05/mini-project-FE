import styles from './footer.module.css'
import ig from '../img/ig.png'
import fb from '../img/fb.png'
import twitter from '../img/twitter.png'
import gmail from '../img/gmail.png'

const Footer = ()=> {
    return (
        <div className={styles.footer}>
            <div className={styles.wrapFooter}>
                <div className={styles.subFooter}>
                    <div>
                        <div>Contact us</div>
                        <div className={styles.contactIcon}>
                            <div className={styles.icon}><img src={ig} alt="" /></div>
                            <div className={styles.icon}><img src={fb} alt="" /></div>
                            <div className={styles.icon}><img src={twitter} alt="" /></div>
                            <div className={styles.icon}><img src={gmail} alt="" /></div>
                        </div>
                    </div>
                    <div>
                        <div>Further Information</div>
                        <div className={styles.detailFoot}>
                            <div>Terms dan Conditions</div>
                            <div>Privacy Policy</div>
                        </div>
                    </div>
                    <div>
                        <div>Address</div>
                        <div className={styles.detailFoot}>
                            <div>Jl. Patimura No 57 Majenang, Cilacap, Jawa Tengah</div>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <div>Designed by Restu Fajar Sidhiq From Jakarta - Indonesia.</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
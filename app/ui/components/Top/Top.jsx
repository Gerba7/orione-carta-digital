import Image from 'next/image';
import styles from './top.module.css';
import Logo from '../../../../public/images/orioneLogo.png';
import Cover from '../../../../public/images/orioneCover.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



const Top = () => {
  return (
    <div className={styles.container}> 
        <div className={styles.background}>
            <Image src={Cover} className={styles.cover} />
        </div>
        <Image className={styles.img} src={Logo} alt='logo' priority />
        <div className={styles.socialContainer}>
            <div className={styles.socialLink}>
                <FacebookIcon fontSize='inherit' color='inherit' />
            </div>
            <div className={styles.socialLink}>
                <InstagramIcon fontSize='inherit' color='inherit' />
            </div>
            <div className={styles.socialLink}>
                <WhatsAppIcon fontSize='inherit' color='inherit' />
            </div>
        </div>
        <h2 className={styles.bottomTitle}>RESERVAS | 4725 3838</h2>
    </div>
  )
}

export default Top

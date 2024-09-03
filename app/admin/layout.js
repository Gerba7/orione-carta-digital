import Sidebar from '../ui/components/Admin/sidebar/Sidebar';
import styles from '../ui/components/Admin/adminLayout.module.css';
import Navbar from '../ui/components/Admin/navbar/Navbar';





const Layout =({children}) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Navbar />
                {children}
            </div>
        </div>
    )
}



export default Layout
import Logo from '../../assets/logo.svg'
import styles from "./index.module.css"

export const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.img} src={Logo} alt="Logo do to do list" />
        </header>
    )
}
import styles from "./index.module.css"
import image from "../../assets/image.png"
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (

        <Link to={'/app'} className={styles.link}>
            <main className={styles.main_container}>
                <section className={styles.section_container}>

                    <article className={styles.text_container}>
                        <h1 className={styles.h1_text}>ToDo List</h1>
                    </article>


                    <img className={styles.img} src={image} alt="" />


                </section>
            </main>
        </Link >
    )
}

export default LandingPage;
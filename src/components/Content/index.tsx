import styles from "./index.module.css"
import {AiOutlinePlusCircle} from "react-icons/ai";

export const Content = () => {
    return (
        <section className={styles['section-container']}>
            <main >
                <article className={styles.input_container}>
                    <input className={styles.input}  type="text" placeholder="Adicione uma nova tarefa"/>
                    <button className={styles.button}> Criar <AiOutlinePlusCircle className={styles.icon} /> </button>
                </article>
            </main>
        </section>
    )
}
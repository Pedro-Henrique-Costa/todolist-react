import { Link, useRouteError } from "react-router-dom";
import styles from "./index.module.css"

//Pegar esse tipo do professor
type ErrorResponse = {
    data: any,
    statusText: string,
    message?: string
}

export default function NotFound() {
    const error = useRouteError() as ErrorResponse;
    console.error(error);

    return (

        <section>
            <h1>Oops!</h1>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <Link to={`/`}>
                <button className={styles.button}>
                    Voltar
                </button>
            </Link>
        </section>
    )
}
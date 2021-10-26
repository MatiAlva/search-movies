import styles from "./MovieCard.module.css"
import {Link} from "react-router-dom"

export function MovieCard ({movie}) {
    const imagenURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path
    return (
        <li className={styles.movieCard}>
            <Link to={"/movies/" +movie.id}>
                <img 
                width={230}
                height={345}
                className={styles.movieImage} 
                src={imagenURL} 
                alt={movie.title} />
            </Link>
            <div>{movie.title}</div>
        </li>
    );
}
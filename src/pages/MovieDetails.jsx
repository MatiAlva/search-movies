import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { get } from "../components/utils/httpClient"
import styles from"./MovieDetails.module.css"
import {Spinner}  from "../components/Spinner"

export function MovieDetails () {
    const{movieId} = useParams()
    const [isLoading, setisLoading] = useState(true) 
    const [movie, setMovie]= useState(null)


    useEffect(() =>{
        setisLoading(true)
        get("/movie/" + movieId).then(data =>{
            setMovie(data)
            setisLoading(false)
        })
    }, [movieId])

    if(isLoading){
        return (
            <Spinner />
        )
    }

    const imagenURL = "https://image.tmdb.org/t/p/w500" + movie.poster_path
    return(
        <div className={styles.detailsContainer}>
            <img className={`${styles.col} ${styles.movieImage}`} src={imagenURL} alt={movie.title} />
            <div className={`${styles.col} ${styles.movieDetails}`}>
                <p className={styles.firstItem}>
                    <strong>Title:</strong> {movie.title}
                </p>
                <p>
                   <strong>Geners: </strong> 
                   {movie.genres.map(genre => genre.name).join(", ")}
                </p>
                <p>
                    <strong>Description:</strong> {movie.overview}
                </p>
            </div>
        </div>
    )
}
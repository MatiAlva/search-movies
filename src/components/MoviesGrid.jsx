import { useEffect, useState } from 'react';
import { MovieCard } from './MovieCard';
import { get } from "../components/utils/httpClient"
import styles from "./MoviesGrid.module.css"

export function MoviesGrid () {
    const [movies, setMovies] = useState([]);


    useEffect(() =>{
        get("/discover/movie") .then(data => {
            setMovies(data.results)
        })
    },[]);
    return (
        <ul className={styles.movieGrid}>
            {movies.map((movie) => (
             <MovieCard key={movie.id} movie={movie}/>
            ))}
        </ul> 
    );
}
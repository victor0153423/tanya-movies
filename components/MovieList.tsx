import MovieCard from './MovieCard'
import styles from '../styles/MovieList.module.css'

interface Movie {
  id: number
  title: string
  poster_path: string | null
}

interface MovieListProps {
  movies: Movie[]
}

export default function MovieList({ movies }: MovieListProps) {
  return (
    <div className={styles.grid}>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

import Link from 'next/link'
import styles from '../styles/MovieCard.module.css'

interface Movie {
  id: number
  title: string
  poster_path: string | null
}

interface MovieCardProps {
  movie: Movie
}

export default function MovieCard({ movie }: MovieCardProps) {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : '/no-image.png'

  return (
    <Link href={`/movie/${movie.id}`}>
      <a className={styles.card}>
        <img src={poster} alt={movie.title} />
        <h3 className={styles.title}>{movie.title}</h3>
      </a>
    </Link>
  )
}

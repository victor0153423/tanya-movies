import type { GetServerSideProps, NextPage } from 'next'
import MovieCard from '../components/MovieCard'

interface Movie {
  id: number
  title: string
  poster_path: string | null
}

interface HomeProps {
  movies: Movie[]
}

const Home: NextPage<HomeProps> = ({ movies }) => {
  return (
    <main>
      <h1>Tanya Movies</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.TMDB_API_KEY}&language=es-MX&page=1`
  )
  const data = await res.json()

  return {
    props: {
      movies: data.results,
    },
  }
}

export default Home

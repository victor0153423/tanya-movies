import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import MovieList from '../components/MovieList'
import { getNowPlaying } from '../lib/tmdb'

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
    <>
      <Head>
        <title>Tanya Movies - Películas Recientes</title>
      </Head>
      <main>
        <h1>Películas Recientes</h1>
        <MovieList movies={movies} />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const movies = await getNowPlaying()
  return { props: { movies } }
}

export default Home

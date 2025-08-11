import type { NextPage, GetServerSideProps } from 'next'
import Head from 'next/head'
import { getMovieDetails } from '../../lib/tmdb'

interface Video {
  id: string
  key: string
  type: string
  iso_639_1: string
}

interface Movie {
  id: number
  title: string
  overview: string
  poster_path: string | null
  videos: {
    results: Video[]
  }
}

interface MovieProps {
  movie: Movie
}

const MovieDetails: NextPage<MovieProps> = ({ movie }) => {
  const trailer = movie.videos.results.find(
    v => v.type === 'Trailer' && (v.iso_639_1 === 'es' || v.iso_639_1 === 'en')
  )

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '/no-image.png'

  return (
    <>
      <Head>
        <title>{movie.title} - Tanya Movies</title>
      </Head>
      <main style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
        <h1>{movie.title}</h1>
        <img src={poster} alt={movie.title} style={{ width: '100%', borderRadius: 8 }} />
        <p>{movie.overview}</p>

        {trailer ? (
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${trailer.key}`}
            title="Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p>Trailer no disponible</p>
        )}
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.params!
  const movie = await getMovieDetails(id as string)
  return { props: { movie } }
}

export default MovieDetails

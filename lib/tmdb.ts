const API_KEY = 'c5b47017ab1ea56f08c19dcf15dcbddc'
const BASE_URL = 'https://api.themoviedb.org/3'

export async function getNowPlaying() {
  const res = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=es-ES&page=1`)
  const data = await res.json()
  return data.results
}

export async function getMovieDetails(id: string) {
  const res = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=es-ES&append_to_response=videos`
  )
  return await res.json()
}

import { useNavigate, useParams } from 'react-router'
import { useEffect, useState } from 'react'
import Loader from '@/components/Loader'
import Modal from '@/components/Modal'

export interface Movie {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}
export interface Rating {
  Source: string
  Value: string
}

export default function MovieDetails() {
  const { movieId } = useParams()
  const [movie, setMovie] = useState<Movie | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetchMovieDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function fetchMovieDetails() {
    const res = await fetch(`https://omdbapi.com?apikey=7035c60c&i=${movieId}`)
    const movie = await res.json()
    setMovie(movie)
  }

  return (
    <Modal offModal={() => navigate('/movies')}>
      <div className="mx-auto flex flex-col gap-10 p-4">
        {movie ? (
          <>
            <img
              src={movie.Poster.replace('SX300', 'SX1200')}
              alt={movie.Title}
            />
            <div>
              <h1 className="text-[60px] leading-[1.1] font-bold">
                {movie.Title}
              </h1>
              <p>{movie.Plot}</p>
              {movie.Ratings.length > 0 && (
                <div className="mt-5">
                  <h3 className="text-[22px] font-bold">Ratings</h3>
                  {movie.Ratings.map(rating => {
                    return (
                      <p key={rating.Source}>
                        {rating.Source} - {rating.Value}
                      </p>
                    )
                  })}
                </div>
              )}
              <div className="mt-5">
                <h3 className="text-[22px] font-bold">Year</h3>
                <p>{movie.Year}</p>
              </div>
              <div className="mt-5">
                <h3 className="text-[22px] font-bold">Rated</h3>
                <p>{movie.Rated}</p>
              </div>
              <div className="mt-5">
                <h3 className="text-[22px] font-bold">Released</h3>
                <p>{movie.Released}</p>
              </div>
              <div className="mt-5">
                <h3 className="text-[22px] font-bold">Runtime</h3>
                <p>{movie.Runtime}</p>
              </div>
              <div className="mt-5">
                <h3 className="text-[22px] font-bold">Genre</h3>
                <p>{movie.Genre}</p>
              </div>
              <div className="mt-5">
                <h3 className="text-[22px] font-bold">Director</h3>
                <p>{movie.Director}</p>
              </div>
            </div>
          </>
        ) : (
          <Loader
            size={100}
            className="relative"
          />
        )}
      </div>
    </Modal>
  )
}

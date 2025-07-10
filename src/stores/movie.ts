import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export type Movies = Movie[]
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export const useMovieStore = create(
  combine(
    {
      movies: [] as Movies,
      searchText: '',
      isLoading: false
    },
    (set, get) => ({
      setSearchText: (searchText: string) => set({ searchText }),
      fetchMovies: async () => {
        const { searchText, isLoading } = get()
        if (isLoading) return
        if (!searchText.trim()) return
        set({ isLoading: true })
        const res = await fetch(
          `https://omdbapi.com/?apikey=7035c60c&s=${searchText}`
        )
        const { Search = [] } = await res.json()
        set({ movies: Search, isLoading: false })
      }
    })
  )
)

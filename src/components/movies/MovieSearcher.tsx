import TextField from '@/components/TextField'
import Button from '@/components/Button'
import { useMovieStore } from '@/stores/movie'

export default function MovieSearcher() {
  const fetchMovies = useMovieStore(state => state.fetchMovies)
  const searchText = useMovieStore(state => state.searchText)
  const setSearchText = useMovieStore(state => state.setSearchText)
  const isLoading = useMovieStore(state => state.isLoading)

  return (
    <div className="grid grid-cols-[1fr_100px] gap-2">
      <TextField
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        onKeyDown={e => {
          if (e.nativeEvent.isComposing) return
          if (e.key === 'Enter') fetchMovies()
        }}
      />
      <Button
        loading={isLoading}
        variant="primary"
        onClick={fetchMovies}>
        Search
      </Button>
    </div>
  )
}

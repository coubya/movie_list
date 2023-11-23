import { useQuery } from "react-query";
import MovieCard from "./MovieCard"
import { getNowPlayingMovies } from "../ApiManagement";
import Loading from "./Loading";
import Error from "./Error";


function MovieList() {
    const {isLoading: isLoadingMovies, isError: isErrorMovies, data: movies} = useQuery({queryKey : 'movies', queryFn: getNowPlayingMovies});
    
    if (isLoadingMovies) {
        return (
            <Loading />
        )
    }

    if (isErrorMovies) {
        return (
            <Error />
        )
    }
    
    return (
        <div className="px-12 pb-12 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-auto">
            {movies?.results?.map((movie: any) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default MovieList
import { useQuery } from "react-query";
import MovieCard from "./MovieCard"
import { getNowPlayingMovies } from "../ApiManagement";


function MovieList() {
    const query = useQuery({queryKey : 'movies', queryFn: getNowPlayingMovies});
    const movies = query?.data?.results;
    
    return (
        <div>
            {movies?.map((movie: any) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default MovieList
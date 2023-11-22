function MovieCard({movie}: any) {
    return (
        <div>
            <a href={`/movies/${movie.id}`}>
                <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.path} />
            </a>
        </div>
    )
}

export default MovieCard
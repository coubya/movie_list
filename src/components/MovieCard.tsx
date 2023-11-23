function MovieCard({movie}: any) {
    return (
        <div className="relative bg-white bg-opacity-0 rounded-md shadow transition-transform transform hover:scale-105">
            <a href={`/movies/${movie.id}`}>
                <img className="rounded-md" src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt={movie.path} />
            </a>
        </div>
    )
}

export default MovieCard
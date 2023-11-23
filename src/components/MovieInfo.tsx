function MovieInfo({details}: any) {
    
    const releaseDate = new Date(details.release_date);
    const month = releaseDate.toLocaleString("default", { month: "short" });
    const day = releaseDate.getDate();
    const year = releaseDate.getFullYear();
    const date = `${month} ${day}, ${year}`;

    return (
        <div className="flex flex-col sm:flex-row gap-4 pb-4">
            <div className="flex-shrink-0">
                <img className="w-[300px] h-[450px] rounded-md" src={"https://image.tmdb.org/t/p/w500" + details.poster_path} />
            </div>
            <div className="flex flex-col justify-end">
                <p className="text-white text-[35.16px] font-normal font-['Roboto']">{details.original_title}</p>
                <p className="text-white text-base font-normal font-['Roboto'] pb-2">{details.overview}</p>
                <p className="text-white text-base font-normal font-['Roboto'] italic">{details.genres.map((genre: any) => genre.name).join(", ")}</p>
                <p className="text-white text-base font-normal font-['Roboto'] italic">{date}</p>
            </div>
        </div>
    )
}

export default MovieInfo
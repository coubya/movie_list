import { useQuery } from "react-query";
import { getMovieCredits, getMovieDetails, getMovieImages } from "../ApiManagement";
import { useParams } from "react-router-dom";

function MovieDetails() {
    const { id } = useParams<{ id: string }>();
    const idString: string = String(id);

    const { isLoading: isLoadingDetails, data: details } = useQuery(["movieDetails", idString], () => getMovieDetails(idString));
    const { isLoading: isLoadingCredits, data: credits } = useQuery(["movieCredits", idString], () => getMovieCredits(idString));
    const { isLoading: isLoadingImages, data: images } = useQuery(["movieImages", idString], () => getMovieImages(idString));
    
    if (isLoadingDetails || isLoadingCredits || isLoadingImages) {
        return <span>Loading...</span>;
    }

    const releaseDate = new Date(details.release_date);
    const month = releaseDate.toLocaleString("default", { month: "short" });
    const day = releaseDate.getDate();
    const year = releaseDate.getFullYear();
    const date = `${month} ${day}, ${year}`;

    console.log(images);

    return(
        <div>
            <img src={"https://image.tmdb.org/t/p/w500" + details.poster_path} />
            <p>{details.original_title}</p>
            <p>{details.overview}</p>
            <p>{details.genres.map((genre: any) => genre.name).join(", ")}</p>
            <p>{date}</p>

            <p>Credits</p>
            {credits?.cast?.map((cast: any) => (
                <div key={cast.cast_id}>
                    <img src={"https://image.tmdb.org/t/p/w500" + cast.profile_path} />
                    <p>{cast.name}</p>
                    <p>{cast.character}</p>
                </div>
            ))}

            <p>Images</p>
            {images?.backdrops?.map((image: any, index: number) => {
                if (image.iso_639_1 === null) {
                    return (
                        <div key={index}>
                            <img src={"https://image.tmdb.org/t/p/w500" + image.file_path} />
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default MovieDetails
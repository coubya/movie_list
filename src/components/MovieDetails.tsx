import { useQuery } from "react-query";
import { getMovieCredits, getMovieDetails, getMovieImages } from "../ApiManagement";
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";
import Loading from "./Loading";
import Error from "./Error";
import ImageSlider from "./ImageSlider";
import CreditSlider from "./CreditSlider";
import MovieInfo from "./MovieInfo";

function MovieDetails() {
    const { id } = useParams<{ id: string }>();
    const idString: string = String(id);

    const { isLoading: isLoadingDetails, isError: isErrorDetails, data: details } = useQuery(["movieDetails", idString], () => getMovieDetails(idString));
    const { isLoading: isLoadingCredits, isError: isErrorCredits, data: credits } = useQuery(["movieCredits", idString], () => getMovieCredits(idString));
    const { isLoading: isLoadingImages, isError: isErrorImages, data: images } = useQuery(["movieImages", idString], () => getMovieImages(idString));
    
    if (isLoadingDetails || isLoadingCredits || isLoadingImages) {
        return (
            <Loading />
        )
    }

    if (isErrorDetails || isErrorCredits || isErrorImages) {
        return (
            <Error />
        )
    }

    return(
        <div className="bg-cover bg-center" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${images?.backdrops[0].file_path})`}}>
            <div className="backdrop-blur-lg bg-slate bg-opacity-40 px-12 pb-12">
                <BackButton />
                <MovieInfo details={details} />
                <CreditSlider credits={credits} />
                <ImageSlider images={images} />
            </div>
        </div>
    )
}   

export default MovieDetails
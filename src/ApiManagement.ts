const API_KEY = "40939acebfc3ca8851fa156130c447c3";
const BASE_URL = "https://api.themoviedb.org/3";

export const getNowPlayingMovies = async () => {
    const url = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`;
    const data = await fetch(url);
    const dataJson = await data.json();
    return dataJson;
}

export const getMovieDetails = async (id: any) => {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;
    const data = await fetch(url);
    const dataJson = await data.json();
    return dataJson;
}

export const getMovieCredits = async (id: any) => {
    const url = `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`;
    const data = await fetch(url);
    const dataJson = await data.json();
    return dataJson;
}

export const getMovieImages = async (id: any) => {
    const url = `${BASE_URL}/movie/${id}/images?api_key=${API_KEY}`;
    const data = await fetch(url);
    const dataJson = await data.json();
    return dataJson;
}

export const getMoviesFromSearch = async (queryData: string) => {
    const url = `${BASE_URL}/search/movie/?query=${queryData}?&api_key=${API_KEY}`;
    const data = await fetch(url);
    const dataJson = await data.json();
    return dataJson;
}
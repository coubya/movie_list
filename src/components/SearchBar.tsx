import { useQuery } from "react-query";
import { getMoviesFromSearch } from "../ApiManagement";

function SearchBar() {

    function handleChange(event: any) {
        /*const token = event.target.value.replace(/\s+/g, '+');
        const { isLoading: isLoadingSearch, data: results } = useQuery(["search", token], () => getMoviesFromSearch(token));

        console.log(results);
        
        if (isLoadingSearch) {
            return <span>Loading...</span>;
        }*/

        console.log(event.target.value);
    }

    return (
        <div className="searchBar">
            <input type="text" placeholder="🔎 Search for movie" onChange={handleChange} />
        </div>
    )
}

export default SearchBar
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
        <div>
            <input className="w-80 h-10 pl-4 pt-[11px] pb-2.5 bg-white dark:bg-searchBarColorDark text-searchBarTextColor rounded-full font-normal font-['Roboto']" type="text" placeholder="🔎 Search for movie" onChange={handleChange} />
        </div>
    )
}

export default SearchBar
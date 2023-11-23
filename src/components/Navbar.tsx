import SearchBar from "./SearchBar";

function Navbar() {
    return (
        <div className="flex flex-col sm:flex-row gap-2 justify-between pt-12 px-12 pb-6">
            <p className="text-black dark:text-white font-normal font-['Roboto'] text-3xl">🎬🍿 Movie library</p>
            <SearchBar />
        </div>
    )
}

export default Navbar
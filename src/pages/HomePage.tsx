import MovieList from "../components/MovieList"
import Navbar from "../components/Navbar"

function HomePage() {
    return (
        <div className="bg-light dark:bg-dark">
            <Navbar />
            <MovieList />
        </div>
    )
}

export default HomePage
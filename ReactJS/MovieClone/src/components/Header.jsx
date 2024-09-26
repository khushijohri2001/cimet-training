import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="bg-slate-900 border-gray-700 flex items-center justify-between py-6 px-16 sticky top-0 z-50">
            <div>
                <Link to="/">
                <img src="https://movix-app-murex.vercel.app/assets/movix-logo-HTlvmwAF.svg" alt="Movix Logo" />
                </Link>
            </div>

            <ul className="text-white flex text-xl gap-6">
                <li className="hover:text-yellow-400">
                    <Link to="/explore/movie">
                    Movie
                    </Link>
                </li>
                <li className="hover:text-yellow-400">
                    <Link to="/explore/tv">
                    Tv Show
                    </Link>
                </li>
            </ul>
        </nav>

    )
}

export default Header
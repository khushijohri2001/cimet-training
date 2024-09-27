import { useLoaderData, useLocation } from "react-router-dom"
import MovieCardList from "../components/MovieCardList";

const Explore = () => {
  const data = useLoaderData();
  const location = useLocation();
  const currentRoute = location?.pathname
  


  return (
    <div className="bg-gray-800 text-white">
      <div className="flex flex-col gap-4 w-[80%] m-auto p-8">
        {/* Explore Header */}
        <div className="flex items-center justify-between">
          <p className="text-3xl">
            Explore {currentRoute === "/explore/movie" ? "Movie" : "TV Show"}
          </p>
          <div className="flex gap-6">
            <select name="Genre" id="genre" className="text-black px-6 py-3 rounded-md ">
              <option value="">Select Genre:</option>
              <option value="saab">Saab</option>
            </select>

            <select name="sort" id="sort" className="text-black px-6 py-3 rounded-md ">
              <option value="">Sort By:</option>
              <option value="saab">Saab</option>
            </select>
          </div>
        </div>

        <MovieCardList movies={data} />

      </div>
    </div>
  )
}

export default Explore
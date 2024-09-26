import { getImageUrl } from "../utils/constants";

const MovieCard = ({card}) => {
  const {id, original_title, original_name, poster_path, release_date, vote_average, first_air_date} = card
  console.log(card);
  
  return (
    <div className="inline-block">
      <div className="relative">
        <img src={getImageUrl+poster_path} alt={original_title || original_name} className="w-56 rounded-md h-96 object-contain" />
        <div className="absolute right-2 bottom-8 flex gap-2 ">
          <p className="bg-pink-700 text-white rounded-sm px-1">Romance</p>
          <p className="bg-pink-700 text-white rounded-sm px-1">Drama</p>
        </div>
        <p className="absolute bottom-0 p-2 bg-white inline-block rounded-full font-extrabold text-xl text-amber-600">
        {Number.parseFloat(vote_average).toFixed(1)}
        </p>
      </div>

      <div className="mt-8">
        <p className="text-white text-xl">{original_title || original_name}</p>
        <p className="text-gray-400 text-sm">{release_date || first_air_date}</p>
      </div>

    </div>
  )
}

export default MovieCard
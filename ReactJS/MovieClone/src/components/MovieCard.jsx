
const MovieCard = () => {
  return (
    <div className="inline-block">
        <div className="relative">
        <img src="https://image.tmdb.org/t/p/original/cSMdFWmajaX4oUMLx7HEDI84GkP.jpg" alt="" className="w-56 rounded-md" />
        <div className="absolute right-2 bottom-4 flex gap-2 ">
          <p className="bg-pink-700 text-white rounded-sm px-1">Romance</p>
          <p className="bg-pink-700 text-white rounded-sm px-1">Drama</p> 
        </div>
        <p className="absolute -bottom-5 p-2 bg-white inline-block rounded-full font-extrabold text-xl text-amber-600">
          7.5
        </p>
        </div>
        <div className="mt-8">
          <p className="text-white text-xl">Movie name</p>
          <p className="text-gray-400 text-sm">date</p>
        </div>

    </div>
  )
}

export default MovieCard
import { getImageUrl, getVideoUrl } from "../utils/constants";

const SinglePageContent = ({movieDetails, trailer}) => {
  const {id, genres, original_title, tagline, overview, vote_average, poster_path, status} = movieDetails;


  console.log(getVideoUrl+trailer.key);
  

  return (
    <div className="z-30 p-10 flex gap-20">
        {/* Image */}
      <div>
        <img
          src={`${getImageUrl}/${poster_path}`}
          alt={original_title}
          className="h-[30rem]"
        />
      </div>

      {/* Content */}
      <div className="w-[60%] flex flex-col gap-7">
        <div>
          <h2 className="text-4xl">{original_title}</h2>
          <p className="text-gray-400 mt-3">
            {tagline}
          </p>
        </div>

        <div className="flex gap-4 text-base">
          {
            genres.map((genre) => <p className="bg-pink-700 text-white rounded-sm px-1">{genre.name}</p>)
          }
          
        </div>

        <div className="flex items-center gap-4">
          <p className="p-4 text-2xl bg-white rounded-full font-extrabold text-amber-600">
            {Number.parseFloat(vote_average).toFixed(1)}
          </p>

          <i className="fa-regular fa-circle-play text-6xl"></i>
          <p className="text-xl">Watch Trailer</p>
        </div>

        <div>
          <h3 className="text-2xl mb-2">Overview</h3>
          <p>
            {overview}
          </p>
        </div>

        <div>
          <p className="border-b border-gray-600 py-3">
            Status: <span className="text-gray-400">{status}</span>
          </p>
          <p className="border-b border-gray-600 py-3">
            Creator: <span className="text-gray-400">Ended</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePageContent;

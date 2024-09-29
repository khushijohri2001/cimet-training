const SinglePageContent = () => {
  return (
    <div className="z-30 p-10 flex gap-20">
        {/* Image */}
      <div>
        <img
          src="https://images-cdn.ubuy.co.in/634fa5a3884d9347417c7d33-movie-poster-action-fantasy-movie-shadow.jpg"
          alt="Poster"
          className="h-[30rem]"
        />
      </div>

      {/* Content */}
      <div className="w-[60%] flex flex-col gap-7">
        <div>
          <h2 className="text-4xl">The Vampire Diaries</h2>
          <p className="text-gray-400 mt-3">
            You remember your first kiss forever.. and ever
          </p>
        </div>

        <div className="flex gap-4 text-sm">
          <p className="bg-pink-700 text-white rounded-sm px-1">Drama</p>
          <p className="bg-pink-700 text-white rounded-sm px-1">
            Sci-fi & Fanatasy
          </p>
        </div>

        <div className="flex items-center gap-4">
          <p className="p-4 text-2xl bg-white rounded-full font-extrabold text-amber-600">
            8.3
            {/* {Number.parseFloat(vote_average).toFixed(1)} */}
          </p>

          <i className="fa-regular fa-circle-play text-6xl"></i>
          <p className="text-xl">Watch Trailer</p>
        </div>

        <div>
          <h3 className="text-2xl mb-2">Overview</h3>
          <p>
            The story od two vampire brothers. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Illo eum consequatur, incidunt quod
            ipsam voluptate voluptatum asperiores dolorum ipsum, sunt dolore
            voluptas id dolor cumque libero nam. Consectetur, quis officiis!
          </p>
        </div>

        <div>
          <p className="border-b border-gray-600 py-3">
            Status: <span className="text-gray-400">Ended</span>
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

import { useLoaderData} from "react-router-dom";
import SinglePageContent from "../components/SinglePageContent";
import RelatedHighlights from "../components/RelatedHighlights";
import TopCastList from "../components/TopCastList";
import OfficialVideoList from "../components/OfficialVideoList";
import { getImageUrl } from "../utils/constants";

const SinglePage = () => {

  const {movieDetails, movieCastDetails, movieVideoDetails} = useLoaderData();

  const {backdrop_path} = movieDetails;

  const trailer = movieVideoDetails.find((video) => video.type === "Trailer")


  return (
    <div className="bg-slate-800 text-white">
      <div
        className="h-[40rem] w-full object-contain bg-cover bg-center text-white relative flex"
        style={{
          backgroundImage: `url(${getImageUrl}/${backdrop_path})`,
        }}
      >
        <div className="h-[40rem] w-screen absolute bg-slate-900 opacity-90"></div>

        <SinglePageContent movieDetails={movieDetails} trailer={trailer} />
      </div>

      <RelatedHighlights title="Top Cast" list={<TopCastList castDetails={movieCastDetails}/>} />
      <RelatedHighlights title="Official Videos" list={<OfficialVideoList/>} />
    </div>
  );
};

export default SinglePage;

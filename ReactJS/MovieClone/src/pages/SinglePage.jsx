import { useParams } from "react-router-dom";
import SinglePageContent from "../components/SinglePageContent";
import RelatedHighlights from "../components/RelatedHighlights";
import TopCastList from "../components/TopCastList";
import OfficialVideoList from "../components/OfficialVideoList";

const SinglePage = () => {
  const id = useParams();
  console.log(id);

  return (
    <div className="bg-slate-800 text-white">
      <div
        className="h-[40rem] w-full object-contain bg-cover bg-center text-white relative flex"
        style={{
          backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/536/846/466/interstellar-movie-movies-wallpaper-preview.jpg)`,
        }}
      >
        {/* Overlay */}
        <div className="h-[40rem] w-screen absolute bg-slate-900 opacity-95"></div>

        <SinglePageContent />
      </div>

      <RelatedHighlights title="Top Cast" list={<TopCastList/>} />
      <RelatedHighlights title="Official Videos" list={<OfficialVideoList/>} />
    </div>
  );
};

export default SinglePage;

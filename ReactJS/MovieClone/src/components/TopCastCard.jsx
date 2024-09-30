import { getImageUrl } from "../utils/constants";

const TopCastCard = ({cast}) => {
  const {original_name, character, profile_path} = cast;

  return (
    <div className="text-center flex flex-col items-center gap-4">
        <img src={profile_path !==null && profile_path ? getImageUrl +"/"+ profile_path: "https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="" className="rounded-full h-24 w-24 object-cover" />

        <div>
            <p className="text-white ">{original_name}</p>
            <p className="text-gray-500">{character}</p>
        </div>
    </div>
  )
}

export default TopCastCard
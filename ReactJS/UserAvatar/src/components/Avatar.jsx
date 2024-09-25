import CrossButton from "./constants/CrossButton"
import { useAvatar } from "../context/AvatarContext";
import { randomColorGenerator} from "../utils/helper-functions";
import { useEffect, useState } from "react";

const Avatar = ({user}) => {
  const {id, username} = user;
  const {state:{users}, dispatch} = useAvatar();

  const [color, setColor] = useState()

  const avatar = username[0].toUpperCase();

  useEffect(() => {
    setColor(randomColorGenerator());
  }, [users])
  
  
  const removeUserHandler = () => {
    dispatch({type: "REMOVE_AVATAR", payload: id})
  }
  
  return (
    <div className='relative'>
      <div className="absolute right-0 -top-2" onClick={removeUserHandler}>
        <CrossButton />
      </div>

      <p className="text-3xl h-16 w-16 px-6 py-3 rounded-full" style={{backgroundColor: color.bgColor}}>{avatar}</p>
    </div>
  )
}

export default Avatar
import { useAvatar } from "../context/AvatarContext"

const AddAvatarButton = () => {
  const {isNewUser, setIsNewUser} = useAvatar();
  
  return (
    <div className="bg-black text-white rounded-full" onClick={() => setIsNewUser(!isNewUser)}>
       <p className="text-3xl h-16 w-16 px-6 py-3">+</p> 
    </div>
  )
}

export default AddAvatarButton
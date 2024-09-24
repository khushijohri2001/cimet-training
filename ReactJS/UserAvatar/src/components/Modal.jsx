import AddAvatarButton from "./AddAvatarButton"
import AvatarList from "./AvatarList"
import NewUserModal from "./NewUserModal"

const Modal = () => {
   
  return (
    <div className="relative bg-white w-[30rem] h-[20rem] rounded-md shadow-2xl flex justify-end items-center gap-8">
        <AvatarList/>
        <AddAvatarButton />
        <NewUserModal />
    </div>
  )
}

export default Modal
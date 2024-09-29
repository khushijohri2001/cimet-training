import AddAvatarButton from "./AddAvatarButton";
import AvatarList from "./AvatarList";
import NewUserModal from "./NewUserPopUp";
import RemoveUserPopUp from "./RemoveUserPopUp";

const Modal = () => {
  return (
    <div className="relative p-2 bg-white w-[30rem] h-[20rem] rounded-md shadow-2xl flex justify-end items-center gap-8">
      <AvatarList />
      <AddAvatarButton />
      <NewUserModal />
      <RemoveUserPopUp />
    </div>
  );
};

export default Modal;

/* eslint-disable react/prop-types */

import { useAvatar } from "../context/AvatarContext";
import CrossButton from "./constants/CrossButton";

// eslint-disable-next-line no-unused-vars
const NewUserModal = () => {
  const { isNewUser, setIsNewUser } = useAvatar();
  return (
    <>
      {isNewUser && (
        <div className="absolute top-14 left-12 flex flex-col justify-between h-32 w-96 shadow-2xl ">
          <div className="absolute -top-3 -right-2">
            <CrossButton onClick={() => setIsNewUser(!isNewUser)} />
          </div>
          <h1 className="border-b-2 border-gray-800 bg-gray-400 p-4 rounded-t-md">
            New User
          </h1>
          <div className="px-4 py-8 bg-white flex gap-5">
            <label htmlFor="">Enter Name</label>
            <input type="text" className="border" />
          </div>
          <div className="bg-gray-400 p-4 rounded-b-md flex gap-6 justify-center">
            <button className="p-2 w-28 rounded-md text-white bg-red-500 hover:border hover:border-red-700" onClick={() => setIsNewUser(!isNewUser)}>
              Cancel
            </button>
            <button className="p-2 w-28 rounded-md text-white bg-green-500 hover:border hover:border-green-700">
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewUserModal;

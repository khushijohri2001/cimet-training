import { useAvatar } from "../context/AvatarContext";

const RemoveUserPopUp = () => {
  const {
    isRemoveUser,
    setIsRemoveUser,
    dispatch,
    removedUserId,
    setRemoveUserId,
  } = useAvatar();

  const removeUserHandler = () => {
    dispatch({ type: "REMOVE_AVATAR", payload: removedUserId });
    setIsRemoveUser(false);
    setRemoveUserId(null);
  };

  return (
    <>
      {isRemoveUser && (
        <div className="absolute top-16 left-12 flex flex-col justify-between h-32 w-96 shadow-2xl shadow-black ">
          <div className="px-4 py-8 bg-gray-200 flex gap-5 rounded-t-md">
            Are your sure you want to remove them?
          </div>
          <div className="bg-gray-400 p-4 rounded-b-md flex gap-6 justify-center">
            <button
              className="p-2 w-28 rounded-md text-white bg-red-500 hover:border hover:border-red-700"
              onClick={() => setIsRemoveUser(!isRemoveUser)}
            >
              Cancel
            </button>
            <button
              className="p-2 w-28 rounded-md text-white bg-green-500 hover:border hover:border-green-700"
              onClick={removeUserHandler}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default RemoveUserPopUp;

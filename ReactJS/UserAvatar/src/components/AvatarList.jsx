import { useAvatar } from "../context/AvatarContext";
import Avatar from "./Avatar";

const AvatarList = () => {
  const {
    state: { users },
  } = useAvatar();

  return (
    <div className="flex gap-4 flex-wrap">
      {users && users.map((user) => <Avatar key={user.id} user={user} />)}
    </div>
  );
};

export default AvatarList;

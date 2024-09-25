import { useAvatar } from "../context/AvatarContext"
import Avatar from "./Avatar"

const AvatarList = () => {
  const { state: {users} } = useAvatar();

  return (
    <>
      {
        users && users.map((user) => <Avatar key={user.id} user={user} />)
      }
    </>
  )
}

export default AvatarList
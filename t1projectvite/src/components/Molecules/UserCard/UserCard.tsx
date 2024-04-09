import Text from "../../Atoms/Text/Text"
import UserName from "../../Atoms/UserName/UserName"
import style from "./UserCard.module.css"

interface Props {
  type: "userCardSmall" | "userCardMiddle"
  name: string
  lastname: string
  image: string
}

const UserCard = ({ type, name, lastname, image }: Props) => {
  return (
    <div className={style[type]}>
      <div className={type === "userCardSmall" ? style.imageSmall : style.image}>
        <img
          className={type === "userCardSmall" ? style.imageSmall : style.image}
          src={image}
          alt="user image"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className={style.TextBlock}>
        <Text type={type}>Written By</Text>
        <UserName type={type} content={`${name} ${lastname}`} />
          
      </div>
    </div>
  )
}

export default UserCard

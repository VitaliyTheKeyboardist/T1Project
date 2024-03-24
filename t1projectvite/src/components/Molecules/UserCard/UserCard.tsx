import Text from "../../Atoms/Text/Text"
import style from "./UserCard.module.css"

interface Props {
  name: string
  lastname: string
  image: string
}

const UserCard = ({ name, lastname, image }: Props) => {
  return (
    <div className={style.userCard}>
      <div className={style.image}>
        <img
          width="54px"
          height="56px"
          src={image}
          alt="user image"
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className={style.TextBlock}>
        <Text type={"userCardText"}>Written By</Text>
        <Text type={"userCardName"}>
          {name} {lastname}
        </Text>
      </div>
    </div>
  )
}

export default UserCard

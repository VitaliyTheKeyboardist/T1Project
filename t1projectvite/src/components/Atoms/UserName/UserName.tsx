import style from './UserName.module.css'

interface Props {
    type: "comment" | "userCardSmall" | "userCardMiddle"
    content: string | undefined
}

const UserName = ({ type, content }: Props) => {
  return (
    <p className={style[type]}>{content}</p>
  )
}

export default UserName
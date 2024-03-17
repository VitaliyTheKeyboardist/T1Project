import style from './UserName.module.css'

interface Props {
    content: string | undefined
}

const UserName = ({ content }: Props) => {
  return (
    <p className={style.text}>{content}</p>
  )
}

export default UserName
import style from './CookingTime.module.css'

interface Props {
  type: 'foodCardTime'
  content: string
}

const CookingTime = ({ type, content }: Props) => {
  return (
    <div className={style[type]}>{content}</div>
  )
}

export default CookingTime
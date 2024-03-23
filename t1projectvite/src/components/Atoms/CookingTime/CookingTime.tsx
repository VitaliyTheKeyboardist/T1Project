import style from './CookingTime.module.css'

interface Props {
  type: 'foodCardTime'
  content: number
}

const CookingTime = ({ type, content }: Props) => {
  return (
    <div className={style[type]}>{content}min •</div>
  )
}

export default CookingTime
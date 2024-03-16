import style from './foodName.module.css'
interface Props {
    type: "foodCard" | "foodCardSmall"
    content: string
}

const FoodName = ({ type, content }: Props) => {
  return (
    <div className={style[type]}>{content}</div>
  )
}

export default FoodName
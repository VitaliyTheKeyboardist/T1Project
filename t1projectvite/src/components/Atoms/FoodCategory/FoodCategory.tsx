import style from './FoodCategory.module.css'

interface Props {
    type: "pizza"
    content: string
}

const FoodCategory = ({ type, content }: Props) => {
  return (
    <div className={style[type]}>{content}</div>
  )
}

export default FoodCategory
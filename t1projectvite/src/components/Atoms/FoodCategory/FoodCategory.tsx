import style from './FoodCategory.module.css'

interface Props {
    type: string
    content: string[]
}

const FoodCategory = ({ type, content }: Props) => {
  return (
    <div className={style.container}>

      {content.map((item) => (
        
        <div key={item}className={style[type]}>{item}</div>
      ))}
    </div>
  )
}

export default FoodCategory
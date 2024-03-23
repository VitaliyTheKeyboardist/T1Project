import style from "./FoodCardImage.module.css"

interface Props {
  src: string
  alt: string
}

const FoodCardImage = ({ src, alt }: Props) => {
  return (
    <div className={style.FoodCardImage}>
      <img className={style.image} src={src} alt={alt} />
    </div>
  )
}

export default FoodCardImage

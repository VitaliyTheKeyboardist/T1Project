import FoodCardImage from "../../Atoms/FoodCardImage/FoodCardImage"
import FoodCategory from "../../Atoms/FoodCategory/FoodCategory"
import FoodName from "../../Atoms/FoodName/FoodName"
import Rank from "../../Atoms/Rank/Rank"
import Bookmark from "../../Atoms/Bookmark/Bookmark"
import CookingTime from "../../Atoms/CookingTime/CookingTime"
import { useState, MouseEvent } from "react"
import style from "./FoodCard.module.css"

interface Props {
  src: string
  alt: string
  foodType: "pizza"
  foodContent: string
  foodNameType: "foodCard" | "foodCardSmall"
  foodNameContent: string
  rankType: "foodCardRank"
  rank: number
  cookingTimeType: "foodCardTime"
  cookingTimeContent: string
}

const FoodCard = ({
  src,
  alt,
  foodType,
  foodContent,
  foodNameType,
  foodNameContent,
  cookingTimeType,
  cookingTimeContent,
  rankType,
  rank,
}: Props) => {
  const [visible, setVisible] = useState<boolean>(false)

  function handleMouseEvent(e: MouseEvent<HTMLElement>) {
    e.preventDefault()
    setVisible(true)
  }
  function handleMouseEventLeave(e: MouseEvent<HTMLElement>) {
    e.preventDefault()
    setVisible(false)
  }

  return (
    <div
      className={style.foodCard}
      onMouseEnter={(e) => handleMouseEvent(e)}
      onMouseLeave={(e) => handleMouseEventLeave(e)}
    >
      <FoodCardImage src={src} alt={alt} />
      <div className={style.textBlock}>
        <FoodCategory type={foodType} content={foodContent} />
        <FoodName type={foodNameType} content={foodNameContent} />
        <div className={style.timeRankBlock}>
          <CookingTime type={cookingTimeType} content={cookingTimeContent} />
          <Rank type={rankType} rank={rank} />

          <Bookmark visible={visible} />
        </div>
      </div>
    </div>
  )
}

export default FoodCard

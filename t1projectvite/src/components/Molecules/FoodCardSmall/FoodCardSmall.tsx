import FoodCardImageSmall from "../../Atoms/FoodCardImageSmall/FoodCardImageSmall"
import FoodName from "../../Atoms/FoodName/FoodName"
import Text from "../../Atoms/Text/Text"
import style from "./FoodCardSmall.module.css"

interface Props {
  imageType: "ChickenHell" | "SweDish" | "FishHellVeg"
  nameType: "foodCard" | "foodCardSmall"
  nameContent: string
  statusType: "foodCardStatusCancelled" | "foodCardStatus"
  status: string
  time: string
}

const FoodCardSmall = ({
  imageType,
  nameType,
  nameContent,
  statusType,
  status,
  time,
}: Props) => {
  return (
    <div className={style.foodCardSmall}>
      <div className={style.image}>
        <FoodCardImageSmall type={imageType} />
      </div>
      <div className={style.textBlock}>
        <FoodName type={nameType} content={nameContent} />
        <Text type={statusType}>{status}</Text>
        <Text type={"deliveryTime"}>{time}</Text>
      </div>
    </div>
  )
}

export default FoodCardSmall

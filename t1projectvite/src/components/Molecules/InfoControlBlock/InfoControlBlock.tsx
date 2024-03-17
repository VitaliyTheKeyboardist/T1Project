import H2Title from "../../Atoms/H2Title/H2Title"
import FoodCardSmall from "../FoodCardSmall/FoodCardSmall"
import style from "./InfoControlBlock.module.css"

const InfoControlBlock = () => {
  return (
    <div className={style.container}>
      <H2Title>
        Control <span style={{ color: "#5C4EAE" }}>Purchases</span> <br /> Via
        Dashboard
      </H2Title>
      <div className={style.foodCardsBlock}>
        <FoodCardSmall
          imageType={"ChickenHell"}
          nameType={"foodCardSmall"}
          nameContent={"Chicken Hell"}
          statusType={"foodCardStatus"}
          status={"On The Way"}
          time={"3:09 PM"}
        />
        <FoodCardSmall
          imageType={"SweDish"}
          nameType={"foodCardSmall"}
          nameContent={"Swe Dish"}
          statusType={"foodCardStatus"}
          status={"Delivered"}
          time={"Yesterday"}
        />
        <FoodCardSmall
          imageType={"FishHellVeg"}
          nameType={"foodCardSmall"}
          nameContent={"Fish Hell Veg"}
          statusType={"foodCardStatusCancelled"}
          status={"Canselled"}
          time={"Yesterday"}
        />
      </div>
    </div>
  )
}

export default InfoControlBlock

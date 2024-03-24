import HighStripes from "./Image/HighStripes.png"
import DownStripes from "./Image/DownStripes.png"
import Graph from "./Image/Graph.png"
import WaveLine from "./Image/WaveLine.png"
import FoodCardSmall from "../FoodCardSmall/FoodCardSmall"
import style from "./ImageH1TitleBlock.module.css"

const ImageH1TitleBlock = () => {
  return (
    <div className={style.container}>
      <img className={style.topImage} src={HighStripes} alt="" />
      <div className={style.foodCard}>
        <FoodCardSmall
          imageType={"ChickenHell"}
          nameType={"foodCardSmall"}
          nameContent={"Chicken Hell"}
          statusType={"foodCardStatus"}
          status={"On The Way"}
          time={"3:09 PM"}
        />
      </div>
      <img className={style.waveLine} src={WaveLine} alt="" />
      <img className={style.graph} src={Graph} alt="Graph" />
      <img className={style.downStripes} src={DownStripes} alt="" />
    </div>
  )
}

export default ImageH1TitleBlock

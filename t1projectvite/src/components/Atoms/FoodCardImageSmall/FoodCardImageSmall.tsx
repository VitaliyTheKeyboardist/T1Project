import style from "./FoodCardImageSmall.module.css"
import ChickenHell from "./img/ChickenHell.png"
import SweDish from "./img/SweDish.png"
import FishHellVeg from "./img/FishHellVeg.png"

interface Props {
  type: "ChickenHell" | "SweDish" | "FishHellVeg"
}


const FoodCardImageSmall = ({ type }: Props) => {
  
  return (
    <div className={style.imageSmall}>
      {type ==="ChickenHell" && <img src={ChickenHell} alt="Изображение блюда" />}
      {type ==="SweDish" && <img src={SweDish} alt="Изображение блюда" />}
      {type ==="FishHellVeg" && <img src={FishHellVeg} alt="Изображение блюда" />}
    </div>
  )
}

export default FoodCardImageSmall

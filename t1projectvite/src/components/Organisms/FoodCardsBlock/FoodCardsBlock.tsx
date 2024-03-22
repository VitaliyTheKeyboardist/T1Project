import H3Title from "../../Atoms/H3Title/H3Title"
import FoodCard from "../../Molecules/FoodCard/FoodCard"
import ChickenKing from "../../Atoms/FoodCardImage/ChickenKing.png"
import Line from "../../Atoms/Line/Line"
import style from "./FoodCardsBlock.module.css"
// import { useLocation } from "react-router-dom"
// import { useEffect } from "react"

const FoodCardsBlock = () => {

  // const location = useLocation()

  // useEffect(() =>{
  //   const ancor = location.hash
  //   if (ancor) {
  //     const element = document.getElementById(ancor.substring(1))
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth"})
  //     }
  //   }
  // }, [location.hash])

  return (
    <div className={style.container} id="Recipes">
      <H3Title>
        Our Top <span style={{ color: "#5C4EAE" }}>Lunch</span>
      </H3Title>
      <div className={style.foodCardsBlock}>
        <FoodCard
          src={ChickenKing}
          alt="Курица"
          foodType="pizza"
          foodContent="Pizza"
          foodNameType="foodCard"
          foodNameContent="The Chicken King"
          cookingTimeType="foodCardTime"
          cookingTimeContent="24min •"
          rankType="foodCardRank"
          rank={4.8}
        />
        <FoodCard
          src={ChickenKing}
          alt="Курица"
          foodType="pizza"
          foodContent="Pizza"
          foodNameType="foodCard"
          foodNameContent="The Chicken King"
          cookingTimeType="foodCardTime"
          cookingTimeContent="24min •"
          rankType="foodCardRank"
          rank={4.8}
        />
        <FoodCard
          src={ChickenKing}
          alt="Курица"
          foodType="pizza"
          foodContent="Pizza"
          foodNameType="foodCard"
          foodNameContent="The Chicken King"
          cookingTimeType="foodCardTime"
          cookingTimeContent="24min •"
          rankType="foodCardRank"
          rank={4.8}
        />
      </div>
      <Line type={"horizontal"} />
    </div>
  )
}

export default FoodCardsBlock

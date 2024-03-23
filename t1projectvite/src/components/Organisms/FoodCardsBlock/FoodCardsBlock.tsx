import H3Title from "../../Atoms/H3Title/H3Title"
import FoodCard from "../../Molecules/FoodCard/FoodCard"
import ChickenKing from "../../Atoms/FoodCardImage/ChickenKing.png"
import Line from "../../Atoms/Line/Line"
import style from "./FoodCardsBlock.module.css"
import { useFetchAllRecipesQuery } from "../../../services/recipesService"
import Text from "../../Atoms/Text/Text"

const FoodCardsBlock = () => {

  const { data, isFetching, error } = useFetchAllRecipesQuery(null)

    console.log(data)
  
  

  return (
    <div className={style.container} id="Recipes">
      <H3Title>
        Our Top <span style={{ color: "#5C4EAE" }}>Lunch</span>
      </H3Title>
      <div className={style.foodCardsBlock}>
        {error && <H3Title>Download failure</H3Title>}
        {isFetching && <H3Title>Download...</H3Title>}
        {data && data.recipes.map((item) => (
          <FoodCard
            key={item.id}
            src={item.image}
            alt={item.name}
            foodType={"pizza"} 
            foodContent={item.mealType}
            foodNameType={"foodCard"}
            foodNameContent={item.name}
            cookingTimeType={"foodCardTime"}
            cookingTimeContent={item.prepTimeMinutes}
            rankType={"foodCardRank"}
            rank={item.rating}
            />
        ))}
        {/* <FoodCard
          src={ChickenKing}
          alt="Chicken"
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
        /> */}
      </div>
      <Line type={"horizontal"} />
    </div>
  )
}

export default FoodCardsBlock

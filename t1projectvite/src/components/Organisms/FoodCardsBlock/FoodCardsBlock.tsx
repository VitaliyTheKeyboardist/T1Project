import H3Title from "../../Atoms/H3Title/H3Title"
import FoodCard from "../../Molecules/FoodCard/FoodCard"
import Line from "../../Atoms/Line/Line"
import style from "./FoodCardsBlock.module.css"
import { useFetchAllRecipesQuery } from "../../../services/recipesService"

const FoodCardsBlock = () => {
  const { data, error, isFetching } = useFetchAllRecipesQuery(null)

  let recipes = data && [...data.recipes]
  let sortRecipes = recipes?.sort((a, b) => b.rating - a.rating)

  return (
    <div className={style.container} id="Recipes">
      <H3Title>
        Our Top <span style={{ color: "#5C4EAE" }}>Lunch</span>
      </H3Title>
      <div className={style.foodCardsBlock}>
        {error && <H3Title>Download failure</H3Title>}
        {isFetching && <H3Title>Download...</H3Title>}
        {sortRecipes &&
          sortRecipes.map(
            (item, index) =>
              index < 3 && (
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
              )
          )}
      </div>
      <Line type={"horizontal"} />
    </div>
  )
}

export default FoodCardsBlock

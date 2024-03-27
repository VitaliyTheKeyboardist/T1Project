import CommentsBlock from "../../Organisms/CommentsBlock/CommentsBlock"
import ControlBlock from "../../Organisms/ControlBlock/ControlBlock"
import FAQBlock from "../../Organisms/FAQBlock/FAQBlock"
import FoodCardsBlock from "../../Organisms/FoodCardsBlock/FoodCardsBlock"
import H1TitleBlock from "../../Organisms/H1TitleBlock/H1TitleBlock"
import H2TitleBlock from "../../Organisms/H2TitleBlock/H2TitleBlock"
import InfoBlock from "../../Organisms/InfoBlock/InfoBlock"

const MainPage = () => {
  return (
    <main>
      <H1TitleBlock />
      <InfoBlock />
      <H2TitleBlock />
      <FoodCardsBlock />
      <ControlBlock />
      <CommentsBlock />
      <FAQBlock />
    </main>
  )
}

export default MainPage

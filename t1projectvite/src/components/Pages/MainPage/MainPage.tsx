import CommentsBlock from "../../Organisms/CommentsBlock/CommentsBlock"
import ControlBlock from "../../Organisms/ControlBlock/ControlBlock"
import FAQBlock from "../../Organisms/FAQBlock/FAQBlock"
import FoodCardsBlock from "../../Organisms/FoodCardsBlock/FoodCardsBlock"
// import Footer from "../../Organisms/Footer/Footer"
import H1TitleBlock from "../../Organisms/H1TitleBlock/H1TitleBlock"
import H2TitleBlock from "../../Organisms/H2TitleBlock/H2TitleBlock"
// import Header from "../../Organisms/Header/Header"
import InfoBlock from "../../Organisms/InfoBlock/InfoBlock"

const MainPage = () => {
  return (
    <>
      {/* <Header /> */}
      <H1TitleBlock />
      <InfoBlock />
      <H2TitleBlock />
      <FoodCardsBlock />
      <ControlBlock />
      <CommentsBlock />
      <FAQBlock />
      {/* <Footer /> */}
    </>
  )
}

export default MainPage

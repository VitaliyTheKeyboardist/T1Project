import "./App.css"
import H1Title from "./components/Atoms/H1Title/H1Title"
import Logo from "./components/Atoms/Logo/Logo"
// import MenuLink from "./components/Atoms/MenuLink/MenuLink"
import Text from "./components/Atoms/Text/Text"
import Button from "./components/Atoms/Button/Button"
import H2Title from "./components/Atoms/H2Title/H2Title"
import H3Title from "./components/Atoms/H3Title/H3Title"
import H4Num from "./components/Atoms/H4Num/H4Num"
import FoodCategory from "./components/Atoms/FoodCategory/FoodCategory"
import FoodName from "./components/Atoms/FoodName/FoodName"
import Rank from "./components/Atoms/Rank/Rank"
import CookingTime from "./components/Atoms/CookingTime/CookingTime"
// import Bookmark from "./components/Atoms/Bookmark/Bookmark"
import FoodCardImage from "./components/Atoms/FoodCardImage/FoodCardImage"
import ChickenKing from "./components/Atoms/FoodCardImage/ChickenKing.png"
import FoodCardImageSmall from "./components/Atoms/FoodCardImageSmall/FoodCardImageSmall"
// import QuestionButton from "./components/Atoms/QuestionButton/QuestionButton"

function AppTest() {
  return (
    <>
      <Logo type={"header"} />
      {/* <MenuLink text="Recipes" type="header" />
      <MenuLink text="Recipes" type="footer" /> */}
      <H1Title text={"Enjoy Foods All Over The "} spanText={"World"} />
      <Text type={"mediumLight"}>
        EatLy help you set saving goals, earn cash back offers, Go to disclaimer
        for more details and get paychecks up to two days early. Get a{" "}
        <span style={{ color: "#5C4EAE" }}>$20 bonus</span>.
      </Text>
      <Text type={"opacityText"}>OVER 1000 USERS</Text>
      <Button type={"deep"} text={"Get Started"} />
      <Button type={"light"} text={"Go Pro"} />
      <Button type={"deepImage"} text={"Download "} img={"afterText"} />
      <H2Title>
        Premium <span style={{ color: "#5C4EAE" }}>Quality</span> For Your
        Health
      </H2Title>
      <H3Title>
        <span style={{ color: "#5C4EAE" }}>Customer</span> Say
      </H3Title>
      <H4Num>99.99%</H4Num>
      <Text type={"smallLight"}>
        Satisfied Costumers <br /> All Great Over The World{" "}
      </Text>
      <FoodCardImage src={ChickenKing} alt="Курица" />
       
      <FoodCategory type={"pizza"} content={"Pizza"} />
      <FoodName type={"foodCard"} content={"The Chicken King"} />
      <Rank type={"foodCardRank"} rank={4.8} />
      {/* <Bookmark /> */}
      <CookingTime type={"foodCardTime"} content={"24min •"} />
      <FoodCardImageSmall type={"ChickenHell"} />
      <FoodName type={"foodCardSmall"} content={"Chicken Hell"} />
      <Text type={"foodCardStatus"}>On The Way</Text>
      <Text type={"foodCardStatusCancelled"}>Cancelled</Text>
      <Text type={"deliveryTime"}>3:09 PM</Text>
      <Text type={"comment"}>I cannot believe how I found you, this is so pretty.</Text>
      {/* <QuestionButton /> */}
    </>
  )
}

export default AppTest

import "./App.css"
import H1Title from "./components/Atoms/H1Title/H1Title"
import Logo from "./components/Atoms/Logo/Logo"
import MenuLink from "./components/Atoms/MenuLink/MenuLink"
import Text from "./components/Atoms/Text/Text"
import Button from "./components/Atoms/Button/Button"
import H2Title from "./components/Atoms/H2Title/H2Title"

function App() {
  return (
    <>
      <Logo width={150} height={57} />
      <MenuLink text="Recipes" type="header" />
      <MenuLink text="Recipes" type="footer" />
      <H1Title text={"Enjoy Foods All Over The "} spanText={"World"} />
      <Text
        type={"paragraph"}
        text={`EatLy help you set saving goals, earn cash back offers, 
          Go to disclaimer for more details and get paychecks up to two days early.
          Get a `}
        spanText={"$20 bonus."}
      />
      <Text type={"opacityText"} text={"OVER 1000 USERS"} />
      <Button type={"deep"} text={"Get Started"} />
      <Button type={"light"} text={"Go Pro"} />
      <Button type={"deepImage"} text={"Download "} img={"afterText"} />
      <H2Title>
        Premium <span style={{ color: "#5C4EAE" }}>Quality</span> For Your
        Health
      </H2Title>
    </>
  )
}

export default App

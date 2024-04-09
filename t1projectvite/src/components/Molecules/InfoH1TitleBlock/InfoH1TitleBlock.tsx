import style from "./InfoH1TitleBlock.module.css"
import Text from "../../Atoms/Text/Text"
import H1Title from "../../Atoms/H1Title/H1Title"
import Button from "../../Atoms/Button/Button"

const InfoH1TitleBlock = () => {
  return (
    <div className={style.infoBlockContainer}>
      <Text type={"opacityText"}>OVER 1000 USERS</Text>
      <H1Title text={"Enjoy Foods All Over The "} spanText={"World"} />
      <Text type={"mediumLight"}>
        EatLy help you set saving goals, earn cash back offers, Go to disclaimer
        for more details and get paychecks up to two days early. Get a{" "}
        <span style={{ color: "#5C4EAE" }}>$20 bonus</span>.
      </Text>
      <div className={style.buttonBlock}>
        <Button type={"deep"} text={"Get Started"} />
        <Button type={"light"} text={"Go Pro"} />
      </div>
    </div>
  )
}

export default InfoH1TitleBlock

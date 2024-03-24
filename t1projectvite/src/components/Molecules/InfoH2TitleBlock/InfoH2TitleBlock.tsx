import Button from "../../Atoms/Button/Button"
import H2Title from "../../Atoms/H2Title/H2Title"
import ListItem from "../../Atoms/ListItem/ListItem"
import UnorderedList from "../../Atoms/UnorderedList/UnorderedList"
import WaveLine from "./Image/WaveLine.svg"
import style from "./InfoH2TitleBlock.module.css"


const InfoH2TitleBlock = () => {
  return (
    <div className={style.infoBlock}>
      <H2Title>
        Premium <span style={{ color: "#5C4EAE" }}>Quality</span> <br/>For Your
        Health
      </H2Title>

      <UnorderedList>
        <ListItem>
          Premium quality food is made with ingredients that are packed with
          essential vitamins, minerals.
        </ListItem>
        <ListItem>These foods promote overall wellness by support healthy digestion and boosting immunity</ListItem>
      </UnorderedList>
      <Button type={"deepImage"} text={"Download "} img={"afterText"} />
      <div className={style.image}>
        <img src={WaveLine} alt="Wave line" />
      </div>
    </div>
  )
}

export default InfoH2TitleBlock

import style from "./H1TitleBlock.module.css"
import InfoH1TitleBlock from "../../Molecules/InfoH1TitleBlock/InfoH1TitleBlock"
import ImageH1TitleBlock from "../../Molecules/ImageH1TitleBlock/ImageH1TitleBlock"

const H1TitleBlock = () => {
  return (
    <div className={style.container}>
      <InfoH1TitleBlock />
      <ImageH1TitleBlock />
    </div>
  )
}

export default H1TitleBlock

import Line from "../../Atoms/Line/Line"
import InfoH2TitleBlock from "../../Molecules/InfoH2TitleBlock/InfoH2TitleBlock"
import MobilePhone from "./Image/MobilePhone.png"
import style from "./H2TitleBlock.module.css"

const H2TitleBlock = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.imageBlock}>
          <img src={MobilePhone} alt="Изображение телефона" />
        </div>
        <InfoH2TitleBlock />
      </div>
      <Line type={"horizontal"} />
    </>
  )
}

export default H2TitleBlock

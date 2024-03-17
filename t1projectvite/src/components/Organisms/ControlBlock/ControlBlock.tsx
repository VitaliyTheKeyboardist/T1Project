import InfoControlBlock from "../../Molecules/InfoControlBlock/InfoControlBlock"
import ControlBlockImage from "./Image/ControlBlockImage.png"
import Line from "../../Atoms/Line/Line"
import style from "./ControlBlock.module.css"

const ControlBlock = () => {
  return (
    <>
      <div className={style.controlBlock}>
        <InfoControlBlock />
        <div className={style.imageBlock}>
          <img src={ControlBlockImage} alt="Пример графика" />
        </div>
      </div>
      <Line type={"horizontal"} />
    </>
  )
}

export default ControlBlock

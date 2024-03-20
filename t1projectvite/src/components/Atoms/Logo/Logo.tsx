import { Link } from "react-router-dom"
import LogoImg from "../Logo/Img/logo.svg"
import style from "./Logo.module.css"
interface Props {
  type: "header" | "footer"
}

const Logo = ({ type }: Props) => {
  return (
    <Link to="/">
      <img className={style[type]} src={LogoImg} alt="Логотип компании" />
    </Link>
  )
}

export default Logo

import MenuLink from "../../Atoms/MenuLink/MenuLink"
import style from "./NavMenu.module.css"

interface Props {
  type: "header" | "footer"
}

const NavMenu = ({ type }: Props) => {
  return (
    <nav className={style[type]}>
      <MenuLink type={type} link={"/#Recipes"} text={"Recipes"} />
      <MenuLink type={type} link={"/#FAQ"} text={"FAQ"} />
      <MenuLink type={type} link={"/blog"} text={"Blog"} />
    </nav>
  )
}

export default NavMenu

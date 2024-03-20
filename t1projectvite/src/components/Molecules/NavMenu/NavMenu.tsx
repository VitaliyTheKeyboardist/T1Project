import MenuLink from '../../Atoms/MenuLink/MenuLink'
import style from './NavMenu.module.css'

interface Props {
    type: "header" | "footer"
}

const NavMenu = ({ type }: Props) => {
  return (
    <nav className={style[type]}>
        <MenuLink type={type} route={"ancor"} link={"/#Recipes"} text={"Recipes"} />
        <MenuLink type={type} route={"ancor"} link={"/#FAQ"} text={"FAQ"} />
        <MenuLink type={type} route={"path"} link={"/blog"} text={"Blog"} />
    </nav>
  )
}

export default NavMenu
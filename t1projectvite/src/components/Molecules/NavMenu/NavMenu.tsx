import MenuLink from '../../Atoms/MenuLink/MenuLink'
import style from './NavMenu.module.css'

interface Props {
    type: "header" | "footer"
}

const NavMenu = ({ type }: Props) => {
  return (
    <nav className={style[type]}>
        <MenuLink type={type} text={"Recipes"} />
        <MenuLink type={type} text={"FAQ"} />
        <MenuLink type={type} text={"Blog"} />
    </nav>
  )
}

export default NavMenu
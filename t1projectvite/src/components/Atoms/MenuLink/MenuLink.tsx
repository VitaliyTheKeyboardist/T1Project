import { NavLink, useLocation } from "react-router-dom"
import style from "./MenuLink.module.css"
import { useEffect } from "react"

interface Props {
  type: "header" | "footer"
  link: string
  text: string
}

const MenuLink = ({ type, link, text }: Props) => {

  const location = useLocation()

  useEffect(() =>{
    const ancor = location.hash
    if (ancor) {
      const element = document.getElementById(ancor.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth"})
      }
    }
  }, [location.hash])
  return (
    <>
      
        <NavLink className={style[type]} to={link}>
          {text}
        </NavLink>
     
    </>
  )
}

export default MenuLink

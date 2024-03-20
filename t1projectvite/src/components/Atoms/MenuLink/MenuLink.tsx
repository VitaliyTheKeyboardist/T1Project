import { Link, NavLink, useLocation } from "react-router-dom"
import style from "./MenuLink.module.css"
import { useEffect } from "react"

interface Props {
  type: "header" | "footer"
  route: "ancor" | "path"
  link: string
  text: string
}

const MenuLink = ({ type, route, link, text }: Props) => {

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
      {/* <a className={style[type]} href={link}>{text}</a> */}
      {/* {route === "ancor" && ( */}
        <NavLink className={style[type]} to={link}>
          {text}
        </NavLink>
      {/* )} */}

      {/* {route === "path" && (
        <NavLink className={style[type]} to={link}>
          {text}
        </NavLink>
      )} */}
    </>
  )
}

export default MenuLink

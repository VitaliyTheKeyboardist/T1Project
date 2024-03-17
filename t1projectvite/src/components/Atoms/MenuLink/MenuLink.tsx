import style from './MenuLink.module.css'

interface Props {
    text: string
    type: "header" | "footer"
}

const MenuLink = ({ text, type }: Props) => {
  return (
    <a className={style[type]} href='#'>{text}</a>
  )
}

export default MenuLink
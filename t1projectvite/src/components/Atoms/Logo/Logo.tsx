import LogoImg from '../Logo/Img/logo.svg'
import style from './Logo.module.css'
interface Props {
    type: "header" | "footer"
}

const Logo = ({ type }: Props) => {
  return (
    <a href='#'>
        <img className={style[type]}src={LogoImg} alt='Логотип компании' />
    </a>
  )
}

export default Logo
import Line from "../../Atoms/Line/Line"
import Logo from "../../Atoms/Logo/Logo"
import NavMenu from "../../Molecules/NavMenu/NavMenu"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Logo type={"header"} />
        <NavMenu type={"header"} />
      </header>
      <Line type={"horizontal"}/>
    </>
  )
}

export default Header

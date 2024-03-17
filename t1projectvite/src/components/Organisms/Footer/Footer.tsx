import Line from "../../Atoms/Line/Line"
import Logo from "../../Atoms/Logo/Logo"
import NavMenu from "../../Molecules/NavMenu/NavMenu"
import Insta from "./Image/Insta.svg"
import Face from "./Image/Face.png"
import LinkIn from "./Image/LinkIn.svg"
import Twi from "./Image/Twi.png"
import Text from "../../Atoms/Text/Text"
import style from "./Footer.module.css"

const Footer = () => {
  return (
    <div>
      <footer className={style.container}>
        <div className={style.navBlock}>
          <Logo type={"footer"} />
          <NavMenu type={"footer"} />
        </div>
        <Line type="horizontal" />
        <div className={style.linkBlock}>
          <Text type="footer">© 2023 EATLY All Rights Reserved.</Text>
          <div className={style.socialLinkBlock}>
            <img className={style.socialLink} src={Insta} alt="instagram" />
            <img className={style.socialLink} src={LinkIn} alt="linkedlin" />
            <img className={style.socialLinkFace} src={Face} alt="facebook" />
            <img className={style.socialLink} src={Twi} alt="twitter" />
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer

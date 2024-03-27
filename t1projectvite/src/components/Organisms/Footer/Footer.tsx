import Line from "../../Atoms/Line/Line"
import Logo from "../../Atoms/Logo/Logo"
import NavMenu from "../../Molecules/NavMenu/NavMenu"
import Insta from "../../Atoms/SocialLink/Image/Insta.svg"
import Face from "../../Atoms/SocialLink/Image/Face.png"
import LinkIn from "../../Atoms/SocialLink/Image/LinkIn.svg"
import Twi from "../../Atoms/SocialLink/Image/Twi.png"
import Text from "../../Atoms/Text/Text"
import style from "./Footer.module.css"
import SocialLink from "../../Atoms/SocialLink/SocialLink"

const Footer = () => {
  return (
    <>
      <footer className={style.container}>
        <div className={style.navBlock}>
          <Logo type={"footer"} />
          <NavMenu type={"footer"} />
        </div>
        <Line type="horizontal" />
        <div className={style.linkBlock}>
          <Text type="footer">© 2023 EATLY All Rights Reserved.</Text>
          <div className={style.socialLinkBlock}>
            <SocialLink src={Insta} alt="instagram" />
            <SocialLink src={LinkIn} alt="linkedlin" />
            <SocialLink src={Face} alt="facebook" />
            <SocialLink src={Twi} alt="twitter" />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

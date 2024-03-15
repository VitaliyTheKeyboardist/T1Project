import LogoImg from '../Logo/Img/logo.svg'

interface Props {
    width: number,
    height: number
}

const Logo = ({ width, height }: Props) => {
  return (
    <a href='#'>
        <img src={LogoImg} width={width} height={height} alt='Логотип компании' />
    </a>
  )
}

export default Logo
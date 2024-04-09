interface Props {
  src: string
  alt: string
}

const SocialLink = ({ src, alt }: Props) => {
  return (
    <>
      <a href="#">
        <img src={src} alt={alt} />
      </a>
    </>
  )
}

export default SocialLink

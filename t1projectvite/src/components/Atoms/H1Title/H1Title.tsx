import style from './H1Title.module.css'

interface Props {
    text: string,
    spanText?: string
}

const H1Title = ({ text, spanText}: Props) => {
  return (
    <h1 className={style.text}>{text}<span className={style.spanText} >{spanText}</span></h1>
  )
}

export default H1Title
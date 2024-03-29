import style from "./TextArea.module.css"

interface Props {
  value: string
  onChange: React.Dispatch<React.SetStateAction<string>>
}

const TextArea = ({ value, onChange }: Props) => {
  return (
    <textarea
      className={style.textArea}
      value={value}
      placeholder="ENTER YOUR COMMENT"
      onChange={(e) => onChange(e.target.value)}
    ></textarea>
  )
}

export default TextArea

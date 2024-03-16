import { useState, MouseEvent } from "react"
import style from "./Bookmark.module.css"
import BookmarkImg from "./Bookmark.svg"

const Bookmark = () => {
  const [visible, setVisible] = useState<boolean>(false)

  function handleMouseEvent(e: MouseEvent<HTMLElement>) {
    e.preventDefault()
    setVisible(true)
  }
  function handleMouseEventLeave(e: MouseEvent<HTMLElement>) {
    e.preventDefault()
    setVisible(false)
  }

  return (
    <div
      className={style.bookmark}
      onMouseEnter={(e) => handleMouseEvent(e)}
      onMouseLeave={(e) => handleMouseEventLeave(e)}
    >
      <img
        className={visible ? style.display : style.none}
        src={BookmarkImg}
        alt="В избранное"
      />
    </div>
  )
}

export default Bookmark

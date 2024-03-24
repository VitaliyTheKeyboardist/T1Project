import style from "./Bookmark.module.css"
import BookmarkImg from "./Bookmark.svg"

interface Props {
  visible: boolean
}

const Bookmark = ({ visible }: Props) => {

  return (
    <div
      className={style.bookmark}
    >
      <img
        className={visible ? style.display : style.none}
        src={BookmarkImg}
        alt="bookmark"
      />
    </div>
  )
}

export default Bookmark

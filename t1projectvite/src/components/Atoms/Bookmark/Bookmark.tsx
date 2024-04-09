import BookmarkImg from "./Bookmark.svg"
import style from "./Bookmark.module.css"

interface Props {
  visible: boolean
}

const Bookmark = ({ visible }: Props) => {

  return (
    <div
      className={style.bookmark}
      data-testid="bookmark"
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

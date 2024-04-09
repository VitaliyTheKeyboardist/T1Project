import style from './CommentIm.module.css'
import Image from './Image.svg'

const CommentImg = () => {
  return (
    <div className={style.image}>
        <img src={Image} alt="comment" />
    </div>
  )
}

export default CommentImg
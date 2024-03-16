import style from "./Rank.module.css"
import Star from "./Img/Star.svg"

interface Props {
  type: "foodCardRank"
  rank: number
}
const Rank = ({ type, rank }: Props) => {
  return (
    <div className={style[type]}>
      {type === "foodCardRank" && <img src={Star} alt="рейтинг" />}
      <span>{rank}</span>
    </div>
  )
}

export default Rank

import Star from "./Img/Star.svg"
import style from "./Rank.module.css"

interface Props {
  type: "foodCardRank" | "articlesRank" | "oneArticleRank"
  rank: number
}
const Rank = ({ type, rank }: Props) => {
  return (
    <div className={style[type]}>
      {type === "foodCardRank" && <img src={Star} alt="reactions" />}
      <span>{rank}</span>
      {type === "articlesRank" && <img src={Star} alt="reactions" />}
      {type === "oneArticleRank" && <img src={Star} alt="reactions" />}
    </div>
  )
}

export default Rank

import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { commentApi } from "../../../services/CommentService"
import Comment from "../../Molecules/Comment/Comment"
import H3Title from "../../Atoms/H3Title/H3Title"

const SliderComments = () => {
  const { data, error, isFetching } = commentApi.useFetchAllCommentsQuery(null)
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  }

  return (
    <>
      {error && <H3Title>Download failure</H3Title>}
      {isFetching && <H3Title>Download...</H3Title>}
      {data && (
        <Slider {...settings}>
          {data.comments.map(
            (item, index) =>
              index < 6 && (
                <Comment
                  key={item.id}
                  type="expanded"
                  userName={`@${item.user.username}`}
                  text={item.body}
                />
              )
          )}
        </Slider>
      )}
    </>
  )
}
export default SliderComments

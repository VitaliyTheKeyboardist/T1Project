import InfoBlockItem from "../../Molecules/InfoBlockItem/InfoBlockItem"
import Text from "../../Atoms/Text/Text"
import style from "./InfoBlock.module.css"
import H4Num from "../../Atoms/H4Num/H4Num"
import Line from "../../Atoms/Line/Line"

const InfoBlock = () => {
  return (
    <div className={style.container}>
      <InfoBlockItem>
        <H4Num>10K+</H4Num>
        <Text type={"smallLight"}>
          Satisfied Costumers
          <br />
          All Great Over The World{" "}
        </Text>
      </InfoBlockItem>
      <Line type={"vertical"} />
      <InfoBlockItem>
        <H4Num>4M</H4Num>
        <Text type={"smallLight"}>
        Healthy Dishes Sold
        <br/>
        Including Milk Shakes Smooth{" "}
        </Text>
      </InfoBlockItem>
      <Line type={"vertical"} />
      <InfoBlockItem>
        <H4Num>99.99%</H4Num>
        <Text type={"smallLight"}>
          Reliable Customer Support
          <br />
          We Provide Great Experiences{" "}
        </Text>
      </InfoBlockItem>
    </div>
  )
}

export default InfoBlock

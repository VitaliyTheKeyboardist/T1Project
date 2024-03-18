import H3Title from "../../Atoms/H3Title/H3Title"
import FAQBlockItem from "../../Molecules/FAQBlockItem/FAQBlockItem"
import Stripes from "./Image/Stripes.svg"
import style from "./FAQBlock.module.css"

const FAQBlock = () => {
  return (
    <div className={style.container}>
      <div className={style.stripes}>
        <img className={style.stripesImg} src={Stripes} alt="" />
      </div>
      <div className={style.titleBlock}>
        <H3Title>
          Frequently Asked <br />
          <span style={{ color: "#5C4EAE" }}>Questions</span>
        </H3Title>
      </div>
      <div className={style.FAQBlock}>
        <FAQBlockItem
          question="How long does delivery take?"
          answer="You Can Get Information By Contacting Our Support Team Have 24/7 Service. What's The Difference Between Free And Paid Plan ?"
          status={true}
        />
        <FAQBlockItem
          question="How Does It Work ?"
          answer="You Can Get Information By Contacting Our Support Team Have 24/7 Service. What's The Difference Between Free And Paid Plan ?"
          status={false}
        />
        <FAQBlockItem
          question="How does your food delivery service work?"
          answer="You Can Get Information By Contacting Our Support Team Have 24/7 Service. What's The Difference Between Free And Paid Plan ?"
          status={false}
        />
        <FAQBlockItem
          question="What payment options do you accept?"
          answer="You Can Get Information By Contacting Our Support Team Have 24/7 Service. What's The Difference Between Free And Paid Plan ?"
          status={false}
        />
        <FAQBlockItem
          question="Do you offer discounts or promotions?"
          answer="You Can Get Information By Contacting Our Support Team Have 24/7 Service. What's The Difference Between Free And Paid Plan ?"
          status={false}
        />
      </div>
    </div>
  )
}

export default FAQBlock

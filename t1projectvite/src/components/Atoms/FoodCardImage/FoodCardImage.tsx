import { ReactNode } from 'react'
import style from './FoodCardImage.module.css'

interface Props {
    children: ReactNode
}

const FoodCardImage = ({children}: Props) => {
  return (
    <div className={style.image}>
        {children}
    </div>
  )
}

export default FoodCardImage
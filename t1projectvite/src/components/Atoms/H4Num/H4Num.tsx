import { ReactNode } from 'react'
import style from './H4Num.module.css'

interface Props {
    children: ReactNode
  }

const H4Num = ({ children }: Props ) => {
  return (
    <div className={style.text}>{children}</div>
  )
}

export default H4Num
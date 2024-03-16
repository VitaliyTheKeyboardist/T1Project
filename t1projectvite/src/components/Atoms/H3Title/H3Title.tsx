import { ReactNode } from 'react'
import style from './H3Title.module.css'

interface Props {
    children: ReactNode
}

const H3Title = ({ children }: Props) => {
  return (
    <h3 className={style.text}>{children}</h3>
  )
}

export default H3Title
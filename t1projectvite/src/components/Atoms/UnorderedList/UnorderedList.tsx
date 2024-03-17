import { ReactNode } from 'react'
import style from './UnorderedList.module.css'

interface Props {
    children: ReactNode
}

const UnorderedList = ({children}: Props) => {
  return (
    <ul className={style.unorderedList}>{children}</ul>
  )
}

export default UnorderedList
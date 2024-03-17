import { ReactNode } from 'react'
import style from './Image.module.css'

interface Props {
    children: ReactNode
}

const Image = ({children}: Props) => {
  return (
    <div>{children}</div>
  )
}

export default Image
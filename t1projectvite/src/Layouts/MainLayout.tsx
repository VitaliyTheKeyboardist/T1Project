import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Organisms/Header/Header"
import Footer from "../components/Organisms/Footer/Footer"

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout

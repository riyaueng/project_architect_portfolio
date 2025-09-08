import React from "react"
import "./Layout.css"
import Header from "../header/Header"
import { Outlet } from "react-router"
import Footer from "../footer/Footer"

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

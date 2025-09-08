// import React, { useEffect, useState } from "react"
import "./Layout.css"
import Header from "../header/Header"
import { Outlet } from "react-router"
import Footer from "../footer/Footer"
// import { useLocation } from "react-router"
// import Loader from "../loader/Loader"

export default function Layout() {
  // const location = useLocation()
  // const displayLoader = location.pathname === "/"
  // const [loader, setLoader] = useState<boolean>(true)

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoader(false)
  //   }, 3000)

  //   return () => clearTimeout(timer)
  // }, [])

  return (
    <>
      {/* {loader? 
    <Loader/> :  
      <Header />
      <Outlet />
      <Footer />
    } */}
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

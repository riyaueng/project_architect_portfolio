import { useEffect, useState } from "react"
import "./Layout.css"
import Header from "../header/Header"
import { Outlet } from "react-router"
import Footer from "../footer/Footer"
import Loader from "../loader/Loader"

export default function Layout() {
  const [loader, setLoader] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const [darkMode, setDarkMode] = useState<boolean>(false)

  return (
    <>
      <div className={darkMode ? "dark" : "light"}>
        {loader ? (
          <Loader />
        ) : (
          <>
            <Header darkMode={darkMode} setDarkmode={setDarkMode} />
            <Outlet />
            <Footer />
          </>
        )}
      </div>
    </>
  )
}

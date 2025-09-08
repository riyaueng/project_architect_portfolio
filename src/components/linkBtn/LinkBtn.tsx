import React from "react"
import "./LinkBtn.css"
import { Link } from "react-router"

export default function LinkBtn() {
  return (
    <>
      <div className="div_btn">
        <Link to="projects">View Projects</Link>
        <img src="../../../public/img/icon_arrow.svg" alt="Pfeil Icon" />
      </div>
    </>
  )
}

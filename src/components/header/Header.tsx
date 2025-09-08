import React from "react"
import "./Header.css"
import Navigation from "../navigation/Navigation"

export default function Header() {
  return (
    <>
      <header>
        <div className="archtitects_logo">
          <img src="../../../public/img/logo_architect.svg" alt="Architects Logo" />
        </div>
        <Navigation />
      </header>
    </>
  )
}

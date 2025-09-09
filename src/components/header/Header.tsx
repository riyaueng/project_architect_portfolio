import React from "react"
import "./Header.css"
import Navigation from "../navigation/Navigation"

interface HeaderProps {
  darkMode: boolean
  setDarkmode: React.Dispatch<React.SetStateAction<boolean>>
}

const logo_black = "../../../public/img/logo_architect.svg"

const logo_white = "../../../public/img/logo_architect_image_white.svg"

export default function Header(props: HeaderProps) {
  return (
    <>
      <header>
        <div className="archtitects_logo">
          <img
            src={props.darkMode ? logo_white : logo_black}
            alt={props.darkMode ? "White Architects Logo" : "Black Architects Logo"}
          />
        </div>
        <Navigation darkMode={props.darkMode} setDarkMode={props.setDarkmode} />
      </header>
    </>
  )
}

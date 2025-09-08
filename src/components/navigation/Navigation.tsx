import React from "react"
import "./Navigation.css"
import { Link } from "react-router"

export default function Navigation() {
  return (
    <div className="wrapper_nav">
      <nav>
        <Link to="/">Main</Link>
        <Link to="gallery">Gallery</Link>
        <Link to="projects">Projects</Link>
        <Link to="certifications">Certifications</Link>
        <Link to="contacts">Contacts</Link>
      </nav>
      <div className="mode_btn">
        <img src="../../../public/img/icon_darkmode.svg" alt="Dark Mode Icon" />
      </div>
    </div>
  )
}

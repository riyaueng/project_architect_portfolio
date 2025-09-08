import React from "react"
import "./HeroSection.css"
import LinkBtn from "../linkBtn/LinkBtn"

export default function HeroSection() {
  return (
    <>
      <section className="section_hero">
        <div className="div_hero_healdine">
          <h1>
            PROJECT <br /> <span>Lorum</span>
          </h1>
        </div>

        <div>
          <img src="../../../public/img/header_hero.jpg" alt="Gebäude mit mehreren Balkons" />
          <LinkBtn />
        </div>
      </section>
    </>
  )
}

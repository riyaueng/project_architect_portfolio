import React from "react"
import "./ProjectsSection.css"
import LinkBtn from "../linkBtn/LinkBtn"

export default function ProjectsSection() {
  return (
    <>
      <section className="section_projects">
        <div className="projects_examples">
          <img src="../../../public/img/projects_01.png" alt="Futuristisches Gebäude" className="image01" />
          <img src="../../../public/img/projects_02.png" alt="Halbmond Gebäude" className="image02" />
          <img src="../../../public/img/projects_03.png" alt="Vogelperspektive Sportplatz" className="03" />
          <img src="../../../public/img/projects_04.png" alt="Hotelanlagen 3D-Modell" className="04" />
          <img src="../../../public/img/projects_05.png" alt="Freizeitpark 3D-Modell" className="05" />
        </div>
        <LinkBtn />
      </section>
    </>
  )
}

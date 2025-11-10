import "./ProjectsSection.css"
import LinkBtn from "../linkBtn/LinkBtn"
import { Link } from "react-router"

export default function ProjectsSection() {
  return (
    <>
      <section className="section_projects">
        <div className="projects_examples">
          <div className="examples_row1">
            <div className="wrapper_example">
              <img src="/img/projects_01.png" alt="Futuristisches Gebäude" className="image01" />

              <div className="projects_overlay">
                <Link to="/projects" className="link_overlay">
                  Sample Project 1
                </Link>
              </div>
            </div>

            <div className="wrapper_example">
              <img src="/img/projects_02.png" alt="Halbmond Gebäude" className="image02" />
              <div className="projects_overlay">
                <Link to="/projects" className="link_overlay">
                  Sample Project 2
                </Link>
              </div>
            </div>
          </div>

          <div className="examples_row2">
            <div className="wrapper_example">
              <img src="/img/projects_03.png" alt="Vogelperspektive Sportplatz" className="03" />

              <div className="projects_overlay">
                <Link to="/projects" className="link_overlay">
                  Sample Project 3
                </Link>
              </div>
            </div>

            <div className="wrapper_example">
              <img src="/img/projects_04.png" alt="Hotelanlagen 3D-Modell" className="04" />

              <div className="projects_overlay">
                <Link to="/projects" className="link_overlay">
                  Sample Project 4
                </Link>
              </div>
            </div>

            <div className="wrapper_example">
              <img src="/img/projects_05.png" alt="Freizeitpark 3D-Modell" className="05" />
              <div className="projects_overlay">
                <Link to="/projects" className="link_overlay">
                  Sample Project 5
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapper_project_btn">
          <LinkBtn link="/projects" text="All Projects" style="btn_dark" svg="btn_svg_light" />
        </div>
      </section>
    </>
  )
}

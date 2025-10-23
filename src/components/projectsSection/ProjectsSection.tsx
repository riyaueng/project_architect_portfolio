import "./ProjectsSection.css"
import LinkBtn from "../linkBtn/LinkBtn"

export default function ProjectsSection() {
  return (
    <>
      <section className="section_projects">
        <div className="projects_examples">
          <div className="examples_row1">
            <div className="wrapper_example">
              <img src="../../../public/img/projects_01.png" alt="Futuristisches Gebäude" className="image01" />

              {/* <div className="projects_overlay">
                <h3>Sample Project</h3>
                <LinkBtn />
              </div> */}
            </div>

            <div className="wrapper_example">
              <img src="../../../public/img/projects_02.png" alt="Halbmond Gebäude" className="image02" />

              {/* <div className="projects_overlay">
                <h3>Sample Project</h3>
                <LinkBtn />
              </div> */}
            </div>
          </div>

          <div className="examples_row2">
            <div className="wrapper_example">
              <img src="../../../public/img/projects_03.png" alt="Vogelperspektive Sportplatz" className="03" />

              {/* <div className="projects_overlay">
                <h3>Sample Project</h3>
                <LinkBtn />
              </div> */}
            </div>

            <div className="wrapper_example">
              <img src="../../../public/img/projects_04.png" alt="Hotelanlagen 3D-Modell" className="04" />

              {/* <div className="projects_overlay">
                <h3>Sample Project</h3>
                <LinkBtn />
              </div> */}
            </div>

            <div className="wrapper_example">
              <img src="../../../public/img/projects_05.png" alt="Freizeitpark 3D-Modell" className="05" />

              {/* <div className="projects_overlay">
                <h3>Sample Project</h3>
                <LinkBtn />
              </div> */}
            </div>
          </div>
        </div>

        <div className="wrapper_project_btn">
          <LinkBtn link="/projects" text="All Projects" style="div_btn_dark" svg="btn_svg_light" />
        </div>
      </section>
    </>
  )
}

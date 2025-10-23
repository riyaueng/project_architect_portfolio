import "./HeroSection.css"
import LinkBtn from "../linkBtn/LinkBtn"

export default function HeroSection() {
  return (
    <>
      <section className="section_hero">
        <div className="div_hero_headline">
          <h1>
            PROJECT <br /> <span>Lorum</span>
          </h1>
        </div>

        <div className="div_img_link">
          <div className="div_hero_image">
            <img src="../../../public/img/header_hero.jpg" alt="Gebäude mit mehreren Balkons" />
          </div>
          <div className="div_link_btn">
            <LinkBtn link="/projects" text="View projects" style="div_btn_light" />
          </div>
        </div>
      </section>
    </>
  )
}

import "./AboutSection.css"
import LinkBtn from "../linkBtn/LinkBtn"

export default function AboutSection() {
  return (
    <>
      <section className="section_about">
        <div className="wrapper_about_images">
          <div className="wrapper_images_column">
            <img src="/public/img/about_01.jpg" alt="Fensterfront" />
            <img src="/public/img/about_03.jpg" alt="Gebäude in Froschperspektive" />
          </div>
          <div className="wrapper_image_alone">
            <img src="/public/img/about_02.jpg" alt="Gebäudespitze" />
          </div>
        </div>

        <div className="wrapper_about_text">
          <h2>About</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
          <LinkBtn link="/certifications" text="Read more" style="btn_dark" svg="btn_svg_light" />
        </div>
      </section>
    </>
  )
}

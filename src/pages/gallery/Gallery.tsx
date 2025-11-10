import "./Gallerly.css"
import IntroSection from "../../components/introSection/IntroSection"

export default function Gallery() {
  return (
    <>
      <main>
        <IntroSection headline1="Photo" headline2="Gallery" />

        <section className="section_gallery">
          <div className="gallery_platzhalter"></div>
          <img src="/img/gallery_02.jpg" alt="Küste mit Leuchtturm" />
          <img src="/img/gallery_03.jpg" alt="Glasdach" />
          <img src="/img/gallery_04.jpg" alt="Leuchtturmspitze" />
          <img src="/img/gallery_05.jpg" alt="Tempelruinen" />
          <img src="/img/gallery_06.jpg" alt="Kirchenbogen mit Ornamente" />
          <img src="/img/gallery_07.jpg" alt="Italienische Seitenstraße" />
          <img src="/img/gallery_08.jpg" alt="Torbögen und Wandmalerei" />
          <img src="/img/gallery_09.jpg" alt="Gebäude am Fluss in Venedig" />
          <img src="/img/gallery_10.jpg" alt="Froschperspektive Gebäudespitzen" />
        </section>
      </main>
    </>
  )
}

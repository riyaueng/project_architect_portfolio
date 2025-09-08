import React from "react"
import "./Gallerly.css"
import IntroSection from "../../components/introSection/IntroSection"

export default function Gallery() {
  return (
    <>
      <main>
        <IntroSection />
        <section className="section_gallery">
          <div className="gallery_platzhalter"></div>
          <img src="../../../public/img/gallery_02.jpg" alt="Küste mit Leuchtturm" />
          <img src="../../../public/img/gallery_03.jpg" alt="Glasdach" />
          <img src="../../../public/img/gallery_04.jpg" alt="Leuchtturmspitze" />
          <img src="../../../public/img/gallery_05.jpg" alt="Tempelruinen" />
          <img src="../../../public/img/gallery_06.jpg" alt="Kirchenbogen mit Ornamente" />
          <img src="../../../public/img/gallery_07.jpg" alt="Italienische Seitenstraße" />
          <img src="../../../public/img/gallery_08.jpg" alt="Torbögen und Wandmalerei" />
          <img src="../../../public/img/gallery_09.jpg" alt="Gebäude am Fluss in Venedig" />
          <img src="../../../public/img/gallery_10.jpg" alt="Froschperspektive Gebäudespitzen" />
        </section>
      </main>
    </>
  )
}

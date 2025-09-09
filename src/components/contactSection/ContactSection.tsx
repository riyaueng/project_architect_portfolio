import React from "react"
import "./ContactSection.css"
import LinkBtn from "../linkBtn/LinkBtn"

export default function ContactSection() {
  return (
    <>
      <section className="section_contact">
        <h2>Contact Us</h2>
        <div className="wrapper_contact">
          <form>
            <input type="text" placeholder="Name" />

            <input type="number" name="" id="" placeholder="Phone Number*" required />

            <input type="mail" placeholder="E-Mail*" required />

            <input type="text" placeholder="Interested In" />

            <textarea rows={12} cols={36}>
              Message*
            </textarea>
          </form>
          <div className="contact_img">
            <img src="../../../public/img/contact_formular.jpg" alt="Mann mit Smartphone und Armbanduhr" />
          </div>
        </div>
        <LinkBtn link="/" text="Send Mail" style="div_btn_dark" svg="btn_svg_light" />
      </section>
    </>
  )
}

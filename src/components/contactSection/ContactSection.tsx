import React from "react"
import "./ContactSection.css"
import LinkBtn from "../linkBtn/LinkBtn"

export default function ContactSection() {
  return (
    <>
      <section className="section_contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="number" name="" id="" placeholder="Phone Number*" required />
          <input type="mail" placeholder="E-Mail*" required />
          <input type="text" placeholder="Interested In" />
          <textarea rows={8} cols={36}>
            Message*
          </textarea>
          <LinkBtn />
        </form>
      </section>
    </>
  )
}

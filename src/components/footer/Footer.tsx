import "./Footer.css"
import { Link } from "react-router"

export default function Footer() {
  return (
    <>
      <footer>
        <section className="footer_info">
          <div className="footer_logo">
            <img src="/img/logo_architect_white.svg" alt="Weißes Architects Logo" />
          </div>
          <div className="wrapper_footer_nav">
            <h4>Information</h4>
            <nav>
              <Link to="/">Main</Link>
              <Link to="gallery">Gallery</Link>
              <Link to="projects">Projects</Link>
              <Link to="certifications">Certifications</Link>
              <Link to="contacts">Contacts</Link>
            </nav>
          </div>

          <div className="wrapper_footer_contacts">
            <h4>Contacts</h4>
            <ul>
              <li>
                <img src="/img/icon_pin.svg" alt="Icon Navigations Pin" />
                <p>1234 Sample Street Austin Texas 78704</p>
              </li>
              <li>
                <img src="/img/icon_phone.svg" alt="Icon Telefonhörer" />
                <p>512.333.2222</p>
              </li>
              <li>
                <img src="/img/icon_mail.svg" alt="Icon Email" />
                <p>sampleemail@gmail.com</p>
              </li>
            </ul>
          </div>

          <div className="wrapper_footer_socials">
            <h4>Social Media</h4>
            <div className="wrapper_socials">
              <img src="/img/icon_facebook.svg" alt="Facebook Logo" />
              <img src="/img/icon_twitter.svg" alt="Twitter Logo" />
              <img src="/img/icon_linkedin.svg" alt="LinkedIn Logo" />
              <img src="/img/icon_pininterest.svg" alt="Pinterest Logo" />
            </div>
          </div>
        </section>
        <section className="footer_copyright">
          <p>© 2021 All Rights Reserved</p>
        </section>
      </footer>
    </>
  )
}

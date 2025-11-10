import "./IntroSection.css"

interface IntroProps {
  headline1: string
  headline2: string
  text?: string
}

export default function IntroSection({ headline1, headline2, text }: IntroProps) {
  const isOnGallery = window.location.pathname === "/gallery"

  return (
    <>
      <section className="section_intro">
        <div className="section_line">
          <h1>
            {headline1} <br /> <span>{headline2}</span>
          </h1>
        </div>

        {isOnGallery ? "" : <p>{text}</p>}
      </section>
    </>
  )
}

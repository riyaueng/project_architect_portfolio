import "./IntroSection.css"

interface IntroProps {
  text1: string
  text2: string
}

export default function IntroSection({ text1, text2 }: IntroProps) {
  return (
    <>
      <section className="section_intro">
        <h1>
          {text1} <br /> <span>{text2}</span>
        </h1>
      </section>
    </>
  )
}

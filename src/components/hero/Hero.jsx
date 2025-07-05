import ButtonHero from './button/Button.hero'
import './hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container text-white">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-Lora">
          Let's do it together.
        </h1>
        <p className="font-Oxygen text-sm sm:text-lg mt-5 opacity-65">
          We travel the world in search of stories. Come along for the ride.
        </p>
        <ButtonHero />
      </div>
    </section>
  )
}

export default Hero

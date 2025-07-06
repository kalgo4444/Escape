import ButtonHero from './button/Button.hero'
import './hero.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
  AOS.init({
    duration: 300,
  })
  return (
    <section className="hero overflow-hidden">
      <div className="container text-white" data-aos="zoom-out-down">
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

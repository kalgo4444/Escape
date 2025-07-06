import { RECENTCARD } from '../../../static'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Recentcard = () => {
  AOS.init({
    duration: 300,
  })
  return (
    <>
      {RECENTCARD.map((i) => (
        <article
          data-aos="zoom-out-up"
          className="min-h-[350px] sm:min-h-[350px] md:min-h-[300px] bg-white shadow-sm relative"
          key={i.id}
        >
          <img src={i.img} className="w-full bg-cover" alt="Card img" />
          <div className="px-3 py-3.5">
            <p className="font-Lora text-lg">{i.cardTitle}</p>
            <p className="mt-1.5 text-cardDesc text-sm">{i.cardDescription}</p>
          </div>
          <div className="px-3 py-3.5 absolute bottom-0 left-0 flex items-center justify-between bg-[#FCFCFC] w-full border-t border-[#EFEFEF] text-xs text-cardBg">
            <div className="flex items-center gap-2">
              <img src={i.image} alt="card author logo" />
              <span>{i.author}</span>
            </div>
            <span>{i.date}</span>
          </div>
        </article>
      ))}
    </>
  )
}

export default Recentcard

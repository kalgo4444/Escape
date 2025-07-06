import { POSTCARD } from '../../../static'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Postcard = () => {
  AOS.init({
    duration: 400,
  })
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-1.5 overflow-hidden">
      {POSTCARD?.map((i) => (
        <article
          data-aos="zoom-in"
          className="bg-gray-400 bg-[url(/src/assets/images/postcardbg2.svg)] bg-no-repeat bg-cover bg-center min-h-[280px] rounded-xs p-5 flex flex-col items-start justify-end text-white relative"
          key={i.id}
        >
          {i.type.gool ? (
            <p className="absolute font-Oxygen top-5 left-5 px-2 py-1.5 bg-mainColor rounded-xs uppercase">
              {i.type.info}
            </p>
          ) : null}
          <h3 className="font-Lora text-lg sm:text-2xl md:text-3xl">
            {i.title}
          </h3>
          <p className="text-sm font-Oxygen opacity-70 mt-1.5">{i.desc}</p>
          <div className="w-full flex items-center justify-between mt-3 text-xs opacity-70">
            <div className="flex items-center justify-between gap-2">
              <img src={i.img} alt="card img" />
              <span>{i.auth}</span>
            </div>
            <p>{i.date}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default Postcard

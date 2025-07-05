import { CATEGORY } from '../../static'

const Category = () => {
  return (
    <section className="bg-white h-[65px]">
      <div className="container h-full flex items-center justify-center gap-[90px] overflow-auto">
        {CATEGORY?.map((e, i) => (
          <a
            href="#"
            key={i}
            className="text-textColor font-Lora hover:text-mainColor border-b border-transparent hover:border-b hover:border-gray-400 duration-300"
          >
            {e}
          </a>
        ))}
      </div>
    </section>
  )
}

export default Category

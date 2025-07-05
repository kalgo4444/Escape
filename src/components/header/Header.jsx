import logo from '../../assets/images/logo.svg'
import { HEADER } from '../../static'
import { MdMenu } from 'react-icons/md'

const Header = () => {
  return (
    <header className="h-[70px] absolute top-0 left-0 z-10 w-full text-white">
      <nav className="container h-full flex items-center justify-between">
        <a href="#">
          <img src={logo} alt="Header logo" />
        </a>
        <ul className="flex items-center gap-10 max-sm:hidden">
          {HEADER.map((e, i) => (
            <li
              className="text-xs uppercase font-Oxygen opacity-60 cursor-pointer hover:opacity-100 duration-300"
              key={i}
            >
              <a href="#">{e}</a>
            </li>
          ))}
        </ul>
        <button className="block sm:hidden">
          <MdMenu className="text-3xl" />
        </button>
      </nav>
    </header>
  )
}

export default Header

import './innerFooter.css'
import { HEADER } from '../../../static'
import logo from '../../../assets/images/logo.svg'

const InnerFooter = () => {
  return (
    <footer className="innerFooter">
      <nav className="container flex items-center justify-between max-md:flex-col gap-10">
        <a href="#">
          <img src={logo} alt="Header logo" />
        </a>
        <ul className="flex items-center gap-5">
          {HEADER.map((e, i) => (
            <li
              className="text-xs uppercase font-Oxygen opacity-60 cursor-pointer hover:opacity-100 duration-300"
              key={i}
            >
              <a href="#">{e}</a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}

export default InnerFooter

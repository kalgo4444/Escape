import FooterTitle from '../title/Footertitle'
import './footer.css'
import Form from './form/Form'
import InnerFooter from './innerFooter/InnerFooter'

const Footer = () => {
  return (
    <footer className="footer text-white">
      <div className="container">
        <FooterTitle />
        <Form />
      </div>
      <InnerFooter />
    </footer>
  )
}

export default Footer

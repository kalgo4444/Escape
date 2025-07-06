import Title from '../title/Title'
import Recentcard from './recentcard/Recentcard'

const Recent = () => {
  return (
    <section>
      <div className="container">
        <Title />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-1.5 overflow-hidden">
          <Recentcard />
        </div>
      </div>
    </section>
  )
}

export default Recent

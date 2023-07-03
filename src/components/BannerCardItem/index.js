// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCardsDetails} = props
  const {headerText, description, className} = bannerCardsDetails
  return (
    <li className={`card ${className}`}>
      <div>
        <h1 className="header">{headerText}</h1>
        <p className="description">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem

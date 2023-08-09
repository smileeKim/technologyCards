import './index.css'

const CardItem = props => {
  const {cardListDetails} = props
  const {title, description, imgUrl, className} = cardListDetails

  return (
    <li className={`${className} card-item-list`}>
      <div>
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <div className="image-container">
          <img src={imgUrl} alt={title} className="image" />
        </div>
      </div>
    </li>
  )
}

export default CardItem

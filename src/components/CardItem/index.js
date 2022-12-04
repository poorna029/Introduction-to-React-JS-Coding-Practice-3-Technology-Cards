// Write your code here.

import './index.css'

const CardItem = props => {
  const {title, description, imgUrl, className} = props
  console.log(title, description, imgUrl, className)
  return (
    <li className={`${className} card`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="img1">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem

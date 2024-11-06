import {cardObj}  from '../../App'
import styles from './CardItem.module.css'
import './index.css'

interface CardItemProps {
    obj : cardObj;
}

function CardItem({obj}:CardItemProps) {
    
    const {title,description,imgUrl,className}= obj;
    const l = className.slice(-1);
    console.log(l);

  return (
    <li className={ `card${l} ${styles.cardItem}`}>
      <div>
        <h1 className={styles.cardTitle}>{title}</h1>
        <p className={styles.cardDescription}>{description}</p>
        <div className={styles.imgContainer}>
          <img className={styles.cardImg} src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
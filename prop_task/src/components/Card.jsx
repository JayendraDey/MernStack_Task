import React from 'react'

import styles from "./Card.module.css"
const Card = ({id , img}) => {
  return (
    <div className={styles.card_container}>
        <div className={styles.description_div}>
            <img src={img} alt="" />
            <h3>Card {id}</h3>
            <p>This car is {id} description</p>
        </div>
    </div>
  )
}

export default Card


















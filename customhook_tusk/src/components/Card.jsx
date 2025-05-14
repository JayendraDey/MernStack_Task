import React from 'react'

import styles from "./Card.module.css"
const Card = ({id , img , title}) => {
  return (
    <div  className={styles.card_container}>
        <div  className={styles.description_div}>
            <img  src={img} alt="" />
           
            <p>{title}</p>
        </div>
    </div>
  )
}

export default Card


















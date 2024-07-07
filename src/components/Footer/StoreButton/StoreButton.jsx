import React from 'react'
import styles from './StoreButton.module.scss'

const StoreButton = (props) => {
  return (
    <a className={styles.storeButton} href={props.link}>
      <div className={styles.icon}>
        <img src={props.icon} alt="iconStore" />
      </div>
      <div className={styles.main}>
        <div className={styles.underText}>{props.underText}</div>
        <div className={styles.text}>{props.text}</div>
      </div>
    </a>
  )
}

export default StoreButton
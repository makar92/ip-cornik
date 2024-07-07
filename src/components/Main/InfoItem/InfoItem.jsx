import React from 'react'
import styles from './InfoItem.module.scss'

const InfoItem = (props) => {
  return (
    <div className={styles.infoItem}>
      <div className={styles.mainInfo}>{props.mainInfo}</div>
      <div className={styles.additionalInfo}>{props.additionalInfo}</div>
    </div>
  )
}

export default InfoItem
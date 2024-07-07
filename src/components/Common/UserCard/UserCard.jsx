import React from 'react'
import styles from './UserCard.module.scss'

const UserCard = (props) => {
  return (
    <div className={styles.userCard + " " + props.className}>
    
      <div className={styles.header}>
          <div className={styles.image}>
            <img src={props.image} alt="user-image" />
          </div>
          <div className={styles.info}>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.chanel}>{props.chanel}</div>
          </div>
        </div>
        <div className={styles.text}>{props.text}</div>
    </div>
  )
}

export default UserCard
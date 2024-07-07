import React from 'react'
import styles from './Main.module.scss'
import InfoItem from './InfoItem/InfoItem'
import Button from '../UI/Button/Button'

const Main = (props) => {

  const text = "Subscribe to our channel to learn more"

  const infoItems = [
    { mainInfo: "20k+", additionalInfo: "subscribers"},
    { mainInfo: "19,5K", additionalInfo: "successful cases"},
    { mainInfo: "4.8/5", additionalInfo: "rating"}
  ]

  return (
    <main className={styles.main + " " + props.className}>
      <div className={styles.text}>{text}</div>
      <div className={styles.infoItems}>
        {infoItems.map((item, index) => (
          <InfoItem
            key={index}
            mainInfo={item.mainInfo}
            additionalInfo={item.additionalInfo}
          />
        ))}
      </div>
      <div className={styles.buttonContainer}>
        <Button text="Join Whatsapp"/>
      </div>
    </main>
  )
}

export default Main
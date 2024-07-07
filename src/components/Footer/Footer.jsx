import React from 'react'
import styles from './Footer.module.scss'
import StoreButton from './StoreButton/StoreButton'

const Footer = (props) => {

  const storeButtons = [
    {
      underText: "get it on ",
      text: "Google play",
      icon: "./image/storeButtons/google-play-svgrepo-com.svg",
      link: "#"
    },
    {
      underText: "Available on the",
      text: "App Store",
      icon: "./image/storeButtons/app-store-svgrepo-com.svg",
      link: "#"
    },
  ]

  return (
    <footer className={styles.footer + " " + props.className}>
      {storeButtons.map((item, index) => (
        <StoreButton
          key={index}
          underText={item.underText}
          text={item.text}
          icon={item.icon}
          link={item.link}
        />
      ))}
    </footer>
  )
}

export default Footer
import React from 'react'
import styles from './CryptoImage.module.scss'

const CryptoImage = (props) => {
  return (
    <div className={styles.cryptoImage + " " + props.className}>
      <img src={props.image} alt="cripto-image" />
    </div>
  )
}

export default CryptoImage
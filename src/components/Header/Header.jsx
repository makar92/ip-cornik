import React from 'react'
import styles from './Header.module.scss'

const Header = (props) => {

  const text = `Do you want to Learn more About cryptocurrencies
  quickly and easily ?`

  // Функция для получения стилизованной последней строки
  const getLastLine = () => {
    const lines = text.split('\n');
    const lastLine = lines[lines.length - 1];
    return (
      <span className={styles.lastLine}>{lastLine}</span>
    );
  };

  return (
    <header className={styles.header + " " + props.className}>
      <div className={styles.text}>
        {text.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {index < text.split('\n').length - 1 ? line + '\n' : getLastLine()}
          </React.Fragment>
        ))}
      </div>
    </header>
  )
}

export default Header
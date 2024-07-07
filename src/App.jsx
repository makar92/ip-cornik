import styles from './App.module.scss'
import CryptoImage from './components/Common/CryptoImage/CryptoImage';
import UserCard from './components/Common/UserCard/UserCard';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {

  const cryptoImages = [
    { cryptoImage: "./image/crypto/Bitcoin.svg" },
    { cryptoImage: "./image/crypto/Litecoin.svg" },
    { cryptoImage: "./image/crypto/Ethereum.svg" }
  ]

  const users = [
    {
      name: "Lorenzo",
      chanel: "@lorenzoo",
      image: "./image/users/1.jpeg",
      text: "Amazing Telegram bot! Provides real-time crypto prices and news"
    },
    {
      name: "Adalina",
      chanel: "@ada",
      image: "./image/users/2.jpeg",
      text: "Must-have bot for crypto traders. Accurate signals and analysis"
    },
    {
      name: "Alexander",
      chanel: "@alex_x",
      image: "./image/users/3.jpeg",
      text: "Superb cryptocurrency bot! Quick updates and reliable data"
    },
    {
      name: "Rushana",
      chanel: "@Hana",
      image: "./image/users/4.jpeg",
      text: "Amazing Telegram bot! Provides real-time crypto prices and news"
    }
  ]

  return (
    <div className={styles.App}>
      <Header className={styles.header}></Header>
      <Main className={styles.main}></Main>
      <Footer className={styles.footer}></Footer>
      <div className={styles.cryptoImages}>
        {cryptoImages.map((item, index) => (
          <CryptoImage 
            key={index} 
            className={styles.cryptoImage}
            image={item.cryptoImage}
          />
        ))}
      </div>
      <div className={styles.userCards}>
        {users.map((item, index) => (
          <UserCard
            key={index}
            className={styles.userCard}
            name={item.name}
            chanel={item.chanel}
            image={item.image}
            text={item.text}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

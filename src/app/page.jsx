import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>
                Home Page Title
            </h1>
            <p>
                Home Page Description
            </p>
            <div className={styles.buttons}>
              <button className={styles.button}>Learn More</button>
              <button className={styles.button}>Contatct</button>

            </div>
            <div className={styles.brands}>
              <Image src="/brands.png" alt="brands" fill />
            </div>
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.heroImg} src="/hero.gif" alt="hero" fill />
          </div>

    </div>
  );
};

export default Home;

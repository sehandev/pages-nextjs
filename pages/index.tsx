import type { NextPage } from "next"
import Image from "next/image"
import Nav from "../components/Nav"
import keywordsPic from "../public/keywords.svg"
import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className={styles.main}>
        <h1 className={styles.name}>Sungdon Kim</h1>
        <div className={styles.keywords}>
          <Image
            alt="keywords"
            layout="responsive"
            src={keywordsPic}
            priority
          />
        </div>
        <h1 id="interests">Interests</h1>
        <h1 id="skills">Skills</h1>
        <h1 id="publications">Publications</h1>
        <h1 id="posts">Recent Posts</h1>
        <h1 id="contact">Contact</h1>
      </main>
    </>
  )
}

export default Home

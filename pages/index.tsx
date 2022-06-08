import type { NextPage } from "next"
import Image from "next/image"
import Nav from "../components/Nav"
import awsLogoPic from "../public/aws-logo.svg"
import fastapiLogoPic from "../public/fastapi-logo.svg"
import kerasLogoPic from "../public/keras-logo.png"
import keywordsPic from "../public/keywords.svg"
import mongoLogoPic from "../public/mongodb-logo.svg"
import nextLogoPic from "../public/nextjs-logo.svg"
import oracleLogoPic from "../public/oracle-logo.svg"
import ptLogoPic from "../public/pytorch-logo.png"
import plLogoPic from "../public/pytorch-lightning-logo.png"
import reactLogoPic from "../public/react-logo.svg"
import rustLogoPic from "../public/ferris.svg"
import tailwindLogoPic from "../public/tailwind-logo.svg"
import tfLogoPic from "../public/tensorflow-logo.png"
import wandbLogoPic from "../public/wandb-logo.svg"
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
        <h1 className={styles.title} id="interests">
          Interests
        </h1>
        <h1 className={styles.title} id="skills">
          Skills
        </h1>
        <div className={styles.skills}>
          <div>
            <h2 className={styles["skill-title"]}>AI</h2>
            <div className={styles["skill-section"]}>
              <div className={styles.skill}>
                <div className={styles["skill-logo"]}>
                  <Image
                    alt="pytorch"
                    layout="responsive"
                    src={ptLogoPic}
                    priority
                  />
                </div>
                <div>PyTorch</div>
              </div>
              <div className={styles.skill}>
                <div className={styles["skill-logo"]}>
                  <Image
                    alt="pytorch-lightning"
                    layout="responsive"
                    src={plLogoPic}
                    priority
                  />
                </div>
                <div>PyTorch Lightning</div>
              </div>
              <div className={styles.skill}>
                <div className={styles["skill-logo"]}>
                  <Image
                    alt="tensorflow"
                    layout="responsive"
                    src={tfLogoPic}
                    priority
                  />
                </div>
                <div>TensorFlow</div>
              </div>
              <div className={styles.skill}>
                <div className={styles["skill-logo"]}>
                  <Image
                    alt="keras"
                    layout="responsive"
                    src={kerasLogoPic}
                    priority
                  />
                </div>
                <div>Keras</div>
              </div>
              <div className={styles.skill}>
                <div className={styles["skill-logo"]}>
                  <Image
                    alt="wandb"
                    layout="responsive"
                    src={wandbLogoPic}
                    priority
                  />
                </div>
                <div>W&B</div>
              </div>
            </div>
          </div>
          <div>
            <h2 className={styles["skill-title"]}>WEB</h2>
            <div className={styles["skill-section"]}>
              <div className={styles.skill}>
                <div className={styles["skill-logo-large"]}>
                  <Image
                    alt="aws"
                    layout="responsive"
                    src={awsLogoPic}
                    priority
                  />
                </div>
                <div>AWS</div>
              </div>
              <div className={styles.skill}>
                <div className={styles["skill-logo"]}>
                  <Image
                    alt="react"
                    layout="responsive"
                    src={reactLogoPic}
                    priority
                  />
                </div>
                <div>React</div>
              </div>
              <div className={styles.skill}>
                <div className={styles["skill-logo-large"]}>
                  <Image
                    alt="nextjs"
                    layout="responsive"
                    src={nextLogoPic}
                    priority
                  />
                </div>
                <div>Next.js</div>
              </div>
              <div className={styles.skill}>
                <div className={styles["skill-logo"]}>
                  <Image
                    alt="fast api"
                    layout="responsive"
                    src={fastapiLogoPic}
                    priority
                  />
                </div>
                <div>FastAPI</div>
              </div>
              <div className={styles["skill-text"]}>Flask</div>
              <div className={styles["skill-text"]}>Django</div>
              <div className={styles["skill-text"]}>
                Oracle
                <br />
                Cloud
              </div>
            </div>
          </div>
          <div>
            <h2 className={styles["skill-title"]}>ETC</h2>
            <div className={styles["skill-section"]}>
              <div className={styles.skill}>
                <div className={styles["skill-logo-large"]}>
                  <Image
                    alt="rust"
                    layout="responsive"
                    src={rustLogoPic}
                    priority
                  />
                </div>
                <div>Rust</div>
              </div>
              <div className={styles.skill}>
                <div className={styles["skill-logo"]}>
                  <Image
                    alt="tailwind"
                    layout="responsive"
                    src={tailwindLogoPic}
                    priority
                  />
                </div>
                <div>Tailwind</div>
              </div>
              <div className={styles.skill}>
                <div className={styles["skill-logo"]}>
                  <Image
                    alt="mongodb"
                    layout="responsive"
                    src={mongoLogoPic}
                    priority
                  />
                </div>
                <div>MongoDB</div>
              </div>
              <div className={styles.skill}>
                <div className={styles["skill-logo-large"]}>
                  <Image
                    alt="oracle"
                    layout="responsive"
                    src={oracleLogoPic}
                    priority
                  />
                </div>
                <div>OracleDB</div>
              </div>
            </div>
          </div>
        </div>
        <h1 className={styles.title} id="publications">
          Publications
        </h1>
        <div className={styles["publication"]}>
          <h2>문장에 포함된 외국어의 자연스러운 발음 표현을 위한 LSTM 방법</h2>
          <p>
            <span className={styles.me}>김성돈</span>, 정재희
          </p>
          <p>정보처리학회논문지 2019</p>
        </div>
        <h1 className={styles.title} id="posts">
          Recent Posts
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h1 className={styles.title} id="contact">
          Contact
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </main>
    </>
  )
}

export default Home

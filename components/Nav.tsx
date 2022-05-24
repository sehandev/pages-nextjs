import Link from "next/link"
import type { FC } from "react"
import styles from "../styles/Nav.module.css"

type NavProps = {}
const Nav: FC<NavProps> = () => {
  return (
    <nav id="top" className={styles["nav-bar"]}>
      <Link href="#top">
        <a className={styles["nav-button"]}>Home</a>
      </Link>
      <Link href="#skills">
        <a className={styles["nav-button"]}>Skills</a>
      </Link>
      <Link href="#publications">
        <a className={styles["nav-button"]}>Publications</a>
      </Link>
      <Link href="/blog?page=1">
        <a className={styles["nav-button"]}>Blog</a>
      </Link>
    </nav>
  )
}

export default Nav

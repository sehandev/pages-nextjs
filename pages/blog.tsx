import type { NextPage } from "next"
import Link from "next/link"
import { useRouter } from "next/router"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import Nav from "../components/BlogNav"
import styles from "../styles/Blog.module.css"

const LAST_PAGE = 5
const getPreviousPage = (page: number) => {
  const prePage = page - 1
  if (prePage < 1) {
    return 1
  }
  return prePage
}
const getNextPage = (page: number) => {
  const nextPage = page + 1
  if (LAST_PAGE < nextPage) {
    return LAST_PAGE
  }
  return nextPage
}

const Blog: NextPage = () => {
  const router = useRouter()
  const { page } = router.query
  const currentPage = Number(page)
  const prePage = getPreviousPage(currentPage)
  const nextPage = getNextPage(currentPage)

  return (
    <>
      <header>
        <Nav />
      </header>
      <main className={styles.main}>
        <div>
          <h1>임베딩 기법의 역사와 종류</h1>
          <p>2022년 05월 24일 - 한글 임베딩 리뷰</p>
          <p>
            초기 임베딩 기법은 말뭉치의 통계량을 직접 활용했다. Latent Semantic
            Analysis (잠재 의미 분석)이 대표적이다. 단어 사용 빈도 등 말뭉치의
            통계량 정보가 들어있는 행렬에 Singular Value Decomposition (특이값
            분해) 등 수학적 기법으로 행렬에 속한 벡터들의 차원을 축소한다.
            대부분의 값이 0인 행렬을 Sparse matrix (희소 행렬) 이라고 ...
          </p>
        </div>
        <div>
          <h1>Sample Title</h1>
          <p>2022년 05월 25일</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </main>
      <footer className={styles.footer}>
        <ul className={styles.pager}>
          {1 < currentPage ? (
            <Link href={`?page=${getPreviousPage(currentPage)}`}>
              <div className={styles.page}>
                <FaArrowLeft />
              </div>
            </Link>
          ) : (
            <div className={styles.page} />
          )}
          <Link href="?page=1">
            <div className={styles.page}>1</div>
          </Link>
          <Link href="?page=2">
            <div className={styles.page}>2</div>
          </Link>
          <Link href="?page=3">
            <div className={styles.page}>3</div>
          </Link>
          <Link href="?page=4">
            <div className={styles.page}>4</div>
          </Link>
          <Link href="?page=5">
            <div className={styles.page}>5</div>
          </Link>
          {currentPage < LAST_PAGE ? (
            <Link href={`?page=${getNextPage(currentPage)}`}>
              <div className={styles.page}>
                <FaArrowRight />
              </div>
            </Link>
          ) : (
            <div className={styles.page} />
          )}
        </ul>
      </footer>
    </>
  )
}

export default Blog

import Image from 'next/image'
import Link from 'next/link'

import { HistoryCard, IHistoryCard } from '../components/HistoryCard/HistoryCard'

import styles from '../styles/Home.module.css'

export default function Home(history: { history: IHistoryCard[] }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        Создание открытки
      </h1>
      <section className={styles.create__container}>
        <Image src="/New.svg" width={84} height={90} alt="Несколько открыток" />
        <Link href="/choose" className={styles.new}>
          Новая открытка +
        </Link>
      </section>
      <section className={styles.history__container}>
        <h2 className={styles.history__header}>
          История
        </h2>
        {history.history.map(historyItem => <HistoryCard key={historyItem.userName} userName={historyItem.userName} imageUrl={historyItem.imageUrl} tags={historyItem.tags} />)}
      </section>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:8088/history`)
  const history = await res.json()
  return { props: { history } }
}

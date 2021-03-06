import ActivePage from '../components/ActivePage'
import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Premier League</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <ActivePage />
    </div>
  )
}

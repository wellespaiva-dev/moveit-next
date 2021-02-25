import Head from 'next/head'

import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperiencieBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { ChallangeBox } from '../components/ChallangeBox'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Inico  |  Move It</title>
      </Head>

      <ExperiencieBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallangeBox />
        </div>
      </section>
      
    </div>
  )
}

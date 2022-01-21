import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <h1>Welcome to ACM@UC</h1>
      <h2>Hit Start button to begin challenge</h2>
      <button><Link href="/quizzes/1"><a>START</a></Link></button>
    </div>
  )
}

export default Home

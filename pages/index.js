import { Text, Box, Heading, Flex, AspectRatio } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image"
import { useEffect } from "react";
import Card from "../components/card";
import Banner from "../components/banner";
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>(1)Engelli Araç Aparatları</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner />
        <Card/>
      </main>

      <footer className={styles.footer}>
        <a
          // href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by CoreTech
          {/* Powered by{' '} */}
          {/* <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} /> */}
        </a>
      </footer>
    </div>
  )
}
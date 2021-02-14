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
    </div>
  )
}
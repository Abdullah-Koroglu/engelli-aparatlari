import { Text, Box, Heading, Flex, AspectRatio } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image"
import { useEffect } from "react";
import Card from "../components/card";
import Banner from "../components/banner";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div >
      <Head>
        <title>(1)Engelli Araç Aparatları</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Banner />
        <Card/>
      </main>
    </motion.div>
  )
}
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
        <title>Engelli Araç Aparatları</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="engelli araç aparatları" />
      </Head>

      <main className={styles.main}>
        <Banner />
        <Card />
      </main>
    </motion.div>
  )
}
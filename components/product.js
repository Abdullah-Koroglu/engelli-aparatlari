import { Text, Box, Heading, Flex, AspectRatio } from "@chakra-ui/react"
import Image from 'next/image'
import { useEffect } from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion";


export default function Product({ imgUrl, Header, Content, targetUrl }) {
    return (
        <motion.div whileHover={{ position: 'relative', zIndex: 1, scale: [1, 1.15, 1.1], transition: { duration: 0.18 } }}>
            <Flex flexDir='column' align='center' maxW={["5xs", "4xs", "2xs", "xs"]} onClick={() => { location.href = targetUrl }} mx='1rem' _hover={{ opacity: '90%' }}>
                <Flex
                    justify='center'
                    align='center'
                    borderRadius="full"
                    w={["200px", "250px", "270px", "330px"]}
                    h={["200px", "250px", "270px", "330px"]}>
                    <Image
                        className={styles.circle}
                        layout="intrinsic"
                        objectFit='cover'
                        width={10000}
                        height={10000}
                        src={imgUrl}
                        styel={{ margin: 100 }}
                        alt='engelli-araç-apartı' />
                </Flex>
                <Text textAlign='center' fontSize={["xl", "2xl", "3xl"]}>
                    {Header}
                </Text>
                <Text textAlign='center' mt='1rem'>
                    {Content}
                </Text>
            </Flex></motion.div>
    )
}
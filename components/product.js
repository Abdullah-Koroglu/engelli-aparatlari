import { Text, Box, Heading, Flex, AspectRatio, Image } from "@chakra-ui/react"
import { useEffect } from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion";

export default function Product({imgUrl , Header , Content , targetUrl}) {
    return (
        <motion.div whileHover={{position : 'relative' , zIndex:1, scale : [1 ,1.15 , 1.1], transition: {duration : 0.18}}}>
            <Flex flexDir='column' align='center' maxW={["5xs", "4xs", "2xs", "xs"]}  onClick={()=>{location.href=targetUrl}} mx='1rem' _hover={{ opacity : '75%' }}>
            <Image
                justifySelf='center'
                borderRadius="full"
                fit='cover'
                w={["200px", "250px", "270px", "330px"]}
                h={["200px", "250px", "270px", "330px"]}
                objectFit="cover"
                src={imgUrl} alt='engelli-araç-apartı'/>
            <Text textAlign='center' fontSize={["xl", "2xl", "3xl"]}>
                {Header}
            </Text>
            <Text textAlign='center' mt='1rem'>
                {Content}
                </Text>    
        </Flex></motion.div>
    )
}
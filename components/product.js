import { Text, Box, Heading, Flex, AspectRatio, Image } from "@chakra-ui/react"
import { useEffect } from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Product({imgUrl , Header , Content , targetUrl}) {
    return (
        <Flex flexDir='column' align='center' maxW={["5xs", "4xs", "2xs", "xs"]}  onClick={()=>{location.href=targetUrl}} mx='1rem' _hover={{ opacity : '75%' }}>
            <Image
                _hover={{ borderRadius : 'lg' }}
                justifySelf='center'
                borderRadius="full"
                fit='cover'
                w={["200px", "250px", "270px", "330px"]}
                h={["200px", "250px", "270px", "330px"]}
                // boxSize={["5xs", "4xs", "2xs", "xs"]}
                objectFit="cover"
                src={imgUrl} />
            <Text textAlign='center' fontSize={["xl", "2xl", "3xl"]}>
                {Header}
            </Text>
            <Text textAlign='center' mt='1rem'>
                {Content}
                </Text>
        </Flex>
    )
}
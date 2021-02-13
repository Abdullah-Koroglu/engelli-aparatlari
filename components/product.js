import { Text, Box, Heading, Flex, AspectRatio, Image } from "@chakra-ui/react"
import { useEffect } from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Product({imgUrl , Header , Content , targetUrl}) {
    return (
        <Flex flexDir='column' align='center' maxW='xs' onClick={()=>{console.log(targetUrl)}} mx='1rem'>
            {/* <main className={styles.main}> */}
            <Image
                _hover={{ borderRadius : 'lg' }}
                justifySelf='center'
                borderRadius="full"
                boxSize="3xs"
                objectFit="cover"
                src={imgUrl} />
            <Text textAlign='center' fontSize='xl'>
                {Header}
            </Text>
            <Text textAlign='center' mt='1rem'>
                {Content}
                </Text>
            {/* </main> */}
        </Flex>
    )
}
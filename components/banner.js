import { Text, Box, Heading, Flex, AspectRatio } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image"
import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'



export default function Banner() {
    const [Window , setWindow] = useState();
    useEffect(()=>{
        if (process.browser) {
            setWindow(window.innerWidth)
            console.log(Window);
        }
    },[])
    
    return (
            <main className={styles.main}>
                <Flex w='100%'  align='center' justify='center' zIndex={0} boxShadow="dark-lg">
                    <Image src='/banner.jpg'  w='100%' />
                    <Flex justify='center' h='100%' align='center' bg='blackAlpha.700' flexDir='column'>
                        <Heading fontFamily='Georgia' color='whiteAlpha.900' textShadow="1px 1px #555555"  as="h1" maxW='2xl' textAlign='center' fontSize={parseInt(Window / 25)} ml={-Window}>
                            Engelli Araç Aparatları
                        </Heading>
                        <Text  ml={-Window} color='whiteAlpha.900' textShadow="1px 1px #555555"  as="h1" maxW='2xl'>
                            Engelleri Birlikte Aşıyoruz
                        </Text>
                    </Flex>

                </Flex>
            </main>
    )
}

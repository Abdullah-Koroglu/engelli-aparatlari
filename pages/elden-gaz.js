import { Text, Box, Heading, Flex, AspectRatio, Image } from "@chakra-ui/react"
import styles from '../styles/Home.module.css'

export default function page() {
    return (
        <Flex flexDir='column' >
            <Flex mt='10rem' flexDir='column' align='center' mx='1rem'>
                <Box w='100%' align='center'>
                    <Heading as='h1' color='gray.800' my='1rem'>
                    İki Ayak Engelli
                    </Heading>
                    <Image src="/elden_gaz.webp" alt="elden_gaz" my='1rem'/>
                </Box><Text my='1rem' textAlign='center' my='1rem'>
                    İki ayağı engelli olanlar için klasik basit sistem. Aparat ileri itildiğinde fren yapar geri çekildiğinde gaz verir.</Text>
                <Box w='6xl' align='center'>
                    </Box>
            </Flex>
        </Flex>

    )
}
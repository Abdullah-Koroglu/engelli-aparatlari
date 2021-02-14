import { Text, Box, Heading, Flex, AspectRatio, Image } from "@chakra-ui/react"
import styles from '../styles/Home.module.css'

export default function page() {
    return (
        <Flex flexDir='column' >
            <main className={styles.main} style={{ margin: ' 11rem' }}>
                <Box w='6xl' align='center'>
                    <Heading as='h1' color='gray.800' my='1rem'>
                    İki Ayak Engelli
                    </Heading>
                    <Image src="/elden_gaz.jpeg" alt="Ek_pedal" my='1rem'/>
                </Box><Text my='1rem' textAlign='center' my='1rem'>
                    İki ayağı engelli olanlar için klasik basit sistem. Aparat ileri itildiğinde fren yapar geri çekildiğinde gaz verir.</Text>
                <Box w='6xl' align='center'>
                    </Box>
            </main>
        </Flex>

    )
}
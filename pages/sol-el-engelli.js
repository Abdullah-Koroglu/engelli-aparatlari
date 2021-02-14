import { Text, Box, Heading, Flex, AspectRatio, Image } from "@chakra-ui/react"
import styles from '../styles/Home.module.css'

export default function page() {
    return (
        <Flex flexDir='column' >
            <main className={styles.main} style={{ margin: ' 11rem' }}>
                <Heading as='h1' color='gray.800' my='1rem'>
                    İki Ayak Engelli Pro
                </Heading>
                <Box w='6xl' align='center'>
                    <Image src="/ek_kol.jpg" alt="Ek_pedal" />
                </Box>
                <Text my='1rem' textAlign='center'>
                    Sol eli engelliler için ilave sinyal kolu .
                </Text>
            </main>
        </Flex>

    )
}
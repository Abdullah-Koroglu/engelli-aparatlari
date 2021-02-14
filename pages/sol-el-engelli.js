import { Text, Box, Heading, Flex, AspectRatio, Image } from "@chakra-ui/react"
import styles from '../styles/Home.module.css'

export default function page() {
    return (
        <Flex flexDir='column' >
            <Flex mt='10rem' flexDir='column' align='center' mx='1rem'>
            <Heading as='h1' color='gray.800' my='1rem'>
                    Sol El Engelli
                </Heading>
                <Box w='100%' align='center'>
                    <Image src="/ek_kol.jpg" alt="Ek_pedal" />
                </Box>
                <Text my='1rem' textAlign='center'>
                    Sol eli engelliler için ilave sinyal kolu .
                </Text>
            </Flex>
        </Flex>

    )
}
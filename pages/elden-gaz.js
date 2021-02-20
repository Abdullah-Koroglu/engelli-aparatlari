import { Text, Box, Heading, Flex, AspectRatio, Image } from "@chakra-ui/react"
import Head from 'next/head'

export default function page() {
    return (
        <Flex flexDir='column' >
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="engelli araç aparatları" />

                <title>(1)Engelli Araç Aparatları</title>
            </Head>

            <Flex mt={{ base: "5rem", md: "11rem" }} flexDir='column' align='center' mx='1rem'>
                <Box w='100%' align='center'>
                    <Heading as='h1' color='gray.800' my='1rem'>
                        İki Ayak Engelli
                    </Heading>
                    <Image src="/elden_gaz.webp" alt="elden_gaz" my='1rem' />
                </Box><Text my='1rem' textAlign='center' my='1rem'>
                    İki ayağı engelli olanlar için klasik basit sistem. Aparat ileri itildiğinde fren yapar geri çekildiğinde gaz verir.</Text>
                <Box w='6xl' align='center'>
                </Box>
            </Flex>
        </Flex>

    )
}
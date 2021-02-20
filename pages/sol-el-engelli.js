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
                <Heading as='h1' color='gray.800' my='1rem'>
                    Sol El Engelli
                </Heading>
                <Box w='100%' align='center'>
                    <Image src="/sol-el-engelli.webp" alt="Ek_kol" />
                </Box>
                <Text my='1rem' textAlign='center'>
                    Sol eli engelliler için ilave sinyal kolu .
                </Text>
            </Flex>
        </Flex>

    )
}
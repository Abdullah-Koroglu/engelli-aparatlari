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

            <Flex mt='10rem' flexDir='column' align='center' mx='1rem'>
                <Heading as='h1' color='gray.800' my='1rem'>
                    İki Ayak Engelli Pro
                </Heading>
                <Box w='100%' align='center'>
                    <Image src="/elden_gaz_kilitli.webp" alt="elden_gaz_kilitli" />
                </Box><Text my='1rem' textAlign='center'>
                    İki ayağı engelli olanlar için fren kilitlemeli sistem. Fren gaz el aparatı, aparat ileri itildiğinde fren geri çekildiğinde gaz verir. Araç fren konumunda iken el aparatın üzerinden kaldırıldığında fren otomatik kitlenir. Aparat üzerine el konulduğunda elin ağırlığı ile kilit iptal olur.</Text>
                <Box w='100%' align='center'>
                    <AspectRatio maxW="6xl" ratio={560 / 315} my='1rem'>
                        <iframe title='iki_ayak_engelli' src="https://www.youtube.com/embed/wlM9D8exmoc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </AspectRatio>
                </Box>
            </Flex>
        </Flex>

    )
}
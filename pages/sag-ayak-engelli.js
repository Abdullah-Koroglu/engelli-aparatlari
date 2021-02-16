import { Text, Box, Heading, Flex, AspectRatio, Image } from "@chakra-ui/react"
import { motion } from "framer-motion"
import Head from 'next/head'

export default function page() {
    return (
        <motion.div>
            <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="engelli araç aparatları" />
                <title>Engelli Araç Aparatları</title>
            </Head>

            <Flex w='100%' flexDir='column' bg='white' exit={{ opacity: 0 }} initial={{ opacity: 0 }}>
                <Flex mt='10rem' flexDir='column' mx='1rem' >
                    <Box align='center'>
                        <Heading as='h1' color='gray.800' my='1rem'>
                            Sağ Ayak Engelli
                    </Heading>
                        <Image src="/ek_pedal.webp" alt="Ek_pedal" />
                    </Box>
                    <Text my='1rem' textAlign='center'>
                        Sağ  ayağı engelli olanların,  gaz ve freni sol ayakla kullanmalarını sağlayan aparat .</Text>
                    <Box w='100%' align='center'>
                        <AspectRatio maxW="6xl" ratio={560 / 315} my='1rem'>
                            <iframe title='sag_ayak_engelli_montaj' src="https://www.youtube.com/embed/XdsVt9vd_Ms" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </AspectRatio>
                        <AspectRatio maxW="6xl" ratio={560 / 315} my='1rem'>
                            <iframe title='sag_ayak_engelli' src="https://www.youtube.com/embed/D6fGpQm2vP4" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </AspectRatio>
                        <AspectRatio maxW="6xl" ratio={560 / 315} my='1rem'>
                            <iframe title='sag_ayak_engelli' src="https://www.youtube.com/embed/Pk991C9MLDo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </AspectRatio>
                    </Box>
                </Flex>
            </Flex>
        </motion.div>
    )
}
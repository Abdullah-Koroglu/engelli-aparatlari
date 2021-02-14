import { Text, Box, Heading, Flex, AspectRatio, Image } from "@chakra-ui/react"
import styles from '../styles/Home.module.css'

export default function page() {
    return (
        <Flex w='100%' flexDir='column'  >
            <Flex mt='10rem' flexDir='column' mx='1rem' >
                <Box align='center'>
                    <Heading as='h1' color='gray.800' my='1rem'>
                        Sağ Ayak Engelli
                    </Heading>
                    <Image src="/ek_pedal.jpeg" alt="Ek_pedal" />
                </Box>
                <Text my='1rem' textAlign='center'>
                    Sağ  ayağı engelli olanların,  gaz ve freni sol ayakla kullanmalarını sağlayan aparat .</Text>
                <Box w='100%' align='center'>
                    <AspectRatio maxW="6xl" ratio={560 / 315} my='1rem'>
                        <iframe src="https://www.youtube.com/embed/XdsVt9vd_Ms" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </AspectRatio>
                    <AspectRatio maxW="6xl" ratio={560 / 315} my='1rem'>
                        <iframe src="https://www.youtube.com/embed/D6fGpQm2vP4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </AspectRatio>
                    <AspectRatio maxW="6xl" ratio={560 / 315} my='1rem'>
                        <iframe src="https://www.youtube.com/embed/Pk991C9MLDo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </AspectRatio>
                </Box>
            </Flex>
        </Flex>

    )
}
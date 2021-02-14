import { Text, Box, Heading, Flex, AspectRatio, Image } from "@chakra-ui/react"
import styles from '../styles/Home.module.css'

export default function page() {
    return (
        <Flex flexDir='column' >
            <Flex mt='10rem' flexDir='column' align='center' mx='1rem'>
                <Heading as='h1' color='gray.800' my='1rem'>
                    İki Ayak Engelli Pro
                </Heading>
                <Box w='100%' align='center'>
                    <Image src="/elden_gaz_kilitli.jpeg" alt="elden_gaz_kilitli" />
                </Box><Text my='1rem' textAlign='center'>
                    İki ayağı engelli olanlar için fren kilitlemeli sistem. Fren gaz el aparatı, aparat ileri itildiğinde fren geri çekildiğinde gaz verir. Araç fren konumunda iken el aparatın üzerinden kaldırıldığında fren otomatik kitlenir. Aparat üzerine el konulduğunda elin ağırlığı ile kilit iptal olur.</Text>
                <Box w='100%' align='center'>
                    <AspectRatio maxW="6xl" ratio={560 / 315} my='1rem'>
                        <iframe src="https://www.youtube.com/embed/wlM9D8exmoc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </AspectRatio>
                </Box>
            </Flex>
        </Flex>

    )
}
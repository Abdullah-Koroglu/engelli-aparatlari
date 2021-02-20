import { Text, Box, Heading, Flex, AspectRatio, Center, Spacer , SimpleGrid } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image"
import Product from "../components/product";



export default function Card() {
    function visitSite() {
        const url = "https://www.google.com.tr/maps/place/Esen%C5%9Fehir,+E-503+Sk.+No:22,+34775+Dudullu+Osb%2F%C3%9Cmraniye%2F%C4%B0stanbul/@41.000253,29.1585231,17z/data=!4m2!3m1!1s0x14cacf409d017edb:0xb293905d12c4af9c?hl=tr"
        var win = window.open(url, '_blank');
        win.focus();
    }
    return (

        <Flex w="100%" align='center' flexDir='column' borderRadius="2xl" overflow="hidden" mt='-1rem' zIndex='10' bg="gray.200" boxShadow="dark-lg">
            <Heading as="h1" fontSize={["2xl", "3xl", "4xl"]} letterSpacing={"-0.1rem"} pt='3rem' textAlign='center' color='gray.800'>
                Ürünlerimiz
            </Heading>
            <Text m='0.4rem' fontSize={["md", "lg", "xl"]} textAlign='center'>
                Ürünlerin Videolarını Görmek İçin Fotoğraflara Tıklayın
            </Text>
            <Flex justify='space-around' w='100%' py='5rem' >
                <SimpleGrid columns={[1, null, 2]} justify='space-around' spacingY='40px' spacingX={["200px", "170px", "200px", "300px"]}>
                     <Box color="gray.700">
                    <Product
                        imgUrl={'/ek_pedal.webp'}
                        targetUrl={'/sag-ayak-engelli'}
                        Header={'Sağ Ayak Engelli'}
                        Content={'Sağ ayağı engelli olanların, gaz ve freni sol ayakla kullanmalarını sağlayan aparat.'}
                        />
                </Box>
                <Box color="gray.700" >
                <Product
                        imgUrl={'/elden_gaz_kilitli.webp'}
                        targetUrl={'/elden-gaz-kilitli'}
                        Header={'İki Ayak Engelli Pro'}
                        Content={'İki ayağı engelli olanlar için fren kilitlemeli sistem. Fren gaz el aparatı, aparat ileri itildiğinde fren geri çekildiğinde gaz verir. Araç fren konumunda iken el aparatın üzerinden kaldırıldığında fren otomatik kitlenir . Aparat üzerine el konulduğunda elin ağırlığı ile kilit iptal olur.'}
                        />
                </Box>
                <Box color="gray.700">
                <Product
                        imgUrl={'/elden_gaz.webp'}
                        targetUrl={'/elden-gaz'}
                        Header={'İki Ayak Engelli'}
                        Content={'İki ayağı engelli olanlar için klasik basit sistem. Aparat ileri itildiğinde fren yapar geri çekildiğinde gaz verir.'}
                        />
                </Box>
                <Box color="gray.700">
                <Product
                        imgUrl={'/sol-el-engelli.webp'}
                        targetUrl={'/sol-el-engelli'}
                        Header={'Sol El Engelli'}
                        Content={'Sol eli engelliler için ilave sinyal kolu .'}
                        />
                </Box>
                </SimpleGrid>
               
            </Flex>
            <Flex bgImage="url('/night.webp')" p='3rem' w='100%' flexDir='column' align='start'>
                <Heading letterSpacing={"-0.1rem"} textAlign='center' color='white'>
                    İletişim
            </Heading>
                <Box onClick={visitSite} _hover={{
                    color: "teal.500",
                    opacity: '70%'
                }}>
                    <Text color='white' fontSize='xl' my='0.5rem' >
                        Adresimiz
                    </Text>
                    <Text color='white' my='0.5rem'>
                        EN-AR Engelli Araç Aparatları
                    </Text>
                    <Flex align='center' my='0.5rem'>
                        <Image src='map.png' alt='map'></Image>
                        <Flex flexDir='column' ml='1rem'>
                            <Text color='whiteAlpha.800' >
                                İMES San.Sit. E Blok 503 Sk. No :22 Ümraniye / İSTANBUL
                            </Text>
                            <Text color='whiteAlpha.800' >
                                Konum için adrese tıklayın.
                            </Text>
                        </Flex>
                    </Flex>
                </Box>
                <Text color='white' fontSize='xl' my='0.5rem' onClick={() => window.open('tel:+905326925249')} _hover={{
                    color: "whiteAlpha.500",
                    opacity: '70%'
                }}>
                    Telefon Numaramız
                </Text>
                <Text color='whiteAlpha.900' fontSize='lg' my='0.5rem' onClick={() => window.open('tel:+905326925249')} _hover={{
                    color: "whiteAlpha.500",
                    opacity: '70%'
                }}>
                    0532 692 52 49
                </Text>
                <Text color='whiteAlpha.900' fontSize='lg' my='0.5rem' onClick={() => window.open('tel:+905326925249')} _hover={{
                    color: "whiteAlpha.500",
                    opacity: '70%'
                }}>
                    Bu telefon numarasından 8.00-24.00 irtibat kurabilirsiniz.
                </Text>
            </Flex>
        </Flex>
    )
}

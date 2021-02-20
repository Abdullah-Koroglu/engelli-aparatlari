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
            <Flex flexDir='column' mt={{ base: "5rem", md: "11rem" }} mx='1rem'>
                <Heading as='h1' color='gray.800' my='1rem'>
                    Sık Sorulan Sorular
                </Heading>
                <Box w='100%' align='start'>
                    <Text as='h2' my='1rem' fontSize='xl' fontWeight='bold'>
                        ÖTV muafiyetinden kimler yararlanır?
                </Text>
                    <Text my='1rem' >
                        İl sağlık kurulundan alınan raporla ilave aparat montajı ile araç kullanabileceği tespit edilen bedensel engelliler ÖTV muafiyetinden yararlanır. Raporda ÖTV muafiyetinden yararlanır ibaresi ve ilave aparat kodları yazılı olmalıdır.
                </Text>
                </Box>
                <Box w='100%' align='start'>
                    <Text as='h2' my='1rem' fontSize='xl' fontWeight='bold'>
                        ÖTV muafiyeti için engel oranı en az yüzde kaç olmalı?
                </Text>
                    <Text my='1rem' >
                        Oran önemli değil. Aracı kullanabilmesi için ilave aparata ihtiyaç duyuyor olması gereklidir.
                    </Text>
                </Box>
                <Box w='100%' align='start'>
                    <Text as='h2' my='1rem' fontSize='xl' fontWeight='bold'>
                        Ortopedik engelliler dışındaki engelliler ÖTV muafiyetinden yararlanabilir mi?
                </Text>
                    <Text my='1rem' >
                        Ortopedik engelliler dışındaki engelliler, engel oranı %90 ve üzeri ise engelli taşıma aracı olarak herhangi bir ilave aparata gerek duymaksızın ÖTV muafiyetli araç alabilirler. Bu kişiler sürücü belgesi alamayacağı için araç, aile fertleri veya sözleşmeli bir sürücü tarafından kullanılır.
                    </Text>
                </Box>
                <Box w='100%' align='start'>
                    <Text as='h2' my='1rem' fontSize='xl' fontWeight='bold'>
                        Engelli aracını engelli dışında kimler kullanabilir?
                </Text>
                    <Text my='1rem' >
                        Engelli aracının TSE kontrolünde engelli olmayanların kullanılmasında bir sakınca olmadığının tespit edilmesi durumunda; engellinin 3 dereceye kadar kan veya hısımlık bağı olanlar kullanabilir.
                    </Text>
                </Box>
            </Flex>
        </Flex>
    )
}
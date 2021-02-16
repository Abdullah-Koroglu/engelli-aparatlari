import { Text, Box, Heading, Flex, AspectRatio, Image, Link } from "@chakra-ui/react"
import styles from '../styles/Home.module.css'

export default function Footer() {
    return (
        <Flex flexDir='column' align='space-around' mt='3rem'>
          <Flex justify='space-around' mb='2rem' textAlign='center' textColor='gray.600'>
              <Flex flexDir='column'>
                <Link href='/'>
                Anasayfa
                </Link>
              </Flex>
              <Flex flexDir='column'>
                Ürünlerimiz
                <Link href='/sag-ayak-engelli' mt='2'>
                Sağ Ayak Engelli
                </Link><Link href='/elden-gaz-kilitli' mt='2'>
                Sol Ayak Engelli Pro
                </Link><Link href='/elden-gaz' mt='2'>
                Sol Ayak Engelli
                </Link><Link href='/sol-el-engelli' mt='2'>
                Sol El Engelli
                </Link>
              </Flex>
              <Flex flexDir='column'>
              <Link href='/faq'>
                Sık Sorulan Sorular
                </Link>
              </Flex>
          </Flex>
        <Text align='center'>
          Powered by CoreTech
        </Text>
      </Flex>
    )
}
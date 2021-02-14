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
              <Link>
                Ürünlerimiz
                </Link><Link href='/sag-ayak-engelli'>
                Sağ Ayak Engelli
                </Link><Link href='/elden-gaz-kilitli'>
                Sol Ayak Engelli Pro
                </Link><Link href='/elden-gaz'>
                Sol Ayak Engelli
                </Link><Link href='/sol-el-engelli'>
                Sol El Engelli
                </Link>
              </Flex>
              <Flex flexDir='column'>
              <Link href='/faq'>
                Sık Sorulan Sorular
                </Link>
              </Flex>
          </Flex>
        <Link align='center'>
          Powered by CoreTech
        </Link>
      </Flex>
    )
}
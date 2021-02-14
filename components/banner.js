import { Text, Box, Heading, Flex, AspectRatio } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image"
import styles from '../styles/Home.module.css'



export default function Banner() {
    return (
                <Flex w='100%'  align='center' justify='center' zIndex={0} boxShadow="dark-lg">
                    <Image src='/banner.jpg'  w='100%' />
                </Flex>
    )
}

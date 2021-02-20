// import { Text, Box, Heading, Flex, AspectRatio } from "@chakra-ui/react"
// import { Image } from "@chakra-ui/image"
// import styles from '../styles/Home.module.css'



// export default function Banner() {
//     return (
//                 <Flex w='100%'  align='center' justify='center' zIndex={0} boxShadow="dark-lg">
//                     <Image src='/banner.webp'  w='100%' alt='engelli-araç-apatları'/>
//                 </Flex>
//     )
// }


import { Text, Box, Heading, Flex, AspectRatio } from "@chakra-ui/react"
// import { Image } from "@chakra-ui/image"
import Image from 'next/image'
import styles from '../styles/Home.module.css'



export default function Banner() {
    return (
        <Flex w='100%' align='center' zIndex={0} flexDir='column' position='relative'>
            <Flex  >
                <Image
                    src='/banner.webp'
                    width={2000} height={900}
                    layout='intrinsic'
                    alt='engelli-araç-apatları' />
            </Flex>
        </Flex>
    )
}

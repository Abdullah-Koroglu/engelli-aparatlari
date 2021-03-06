import React from "react";
import Head from 'next/head'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Heading, Flex, Text, Button, Link, color, Center } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react"

const MenuItems = ({ children }) => (
  <Text my={{ base:5, md: 5 }} mr={6} display="block">
    {children}
  </Text>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header = props => {
  const [show, setShow] = React.useState(true);
  const handleToggle = () => setShow(!show);
  const variants = {
    visible: { opacity: 1},
    hidden: { opacity: 0 },
  }

  return (
    <Flex
      w='100%'
      pos='fixed'
      zIndex={10000}
      as="nav"
      align={{base : "flex-start" , md : "center"}}
      justify='space-between'
      pt="1rem"
      px='2rem'
      bg="white"
      color="blue.800"
      flexDir="column"
      boxShadow="dark-lg"
      {...props}
    >
      <Flex  flexDir='row-reverse' justify={{base : "space-between" , md : "center"}} w='100%'>
       <Link href='/'> <Heading as="h1" fontSize={["sm", "lg", "2xl", "4xl"]} letterSpacing={"-0.02rem"} pb='4' textAlign='center' >
          Engelli Araç Aparatları EN-AR
        </Heading></Link>

     
        <Flex display={{ base: "block", md: "none" }} onClick={handleToggle} >
          <svg
          fill="blue"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Flex>
        </Flex>
        <motion.div 
           layout
           >
      <Flex
        display={{ sm: !show ? "block" : "none", md: "flex", base: !show ? "block" : "none" }}
        width={{ sm: "auto", md: "auto" , base: "auto"}}
        alignItems="center"
        flexGrow={0.1}
        justify='center'
        mt={{base : '0' , md : "0"}}
        pb={{base : '1rem' , md : "0"}}
      >
        <Menu >
          <MenuItems>
            <Link href='/' _hover={{ stroke: 'white', opacity: '70%' }}>
              Anasayfa
          </Link>
          </MenuItems>
          {/* <MenuButton as={Button} bg='white' mr='20px' px='-100px' py='-100px' fontWeight='medium'>
            Ürünlerimiz
  </MenuButton>
          <MenuList> */}
            <MenuItems><Link href='/sag-ayak-engelli'>
              Sağ Ayak Engelli
</Link></MenuItems>
            <MenuItems><Link href='/elden-gaz-kilitli'>
              İki Ayak Engelli Pro
</Link></MenuItems>
            <MenuItems><Link href='/elden-gaz'>
              İki Ayak Engelli
</Link></MenuItems>
            <MenuItems><Link href='/sol-el-engelli'>
              Sol El Engelli
</Link></MenuItems>
          {/* </MenuList> */}
          <MenuItems>
          <Link href='/faq' _hover={{ stroke: 'white', opacity: '70%' }}>
            Popüler Sorular
          </Link></MenuItems>
        </Menu>
      </Flex></motion.div>
      </Flex>
  );
};

export default Header;


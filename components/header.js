import React from "react";
import Head from 'next/head'
import { useEffect, useState } from "react";

import { Box, Heading, Flex, Text, Button, Link, color } from "@chakra-ui/react";
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
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header = props => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      w='100%'
      pos='fixed'
      zIndex={10000}
      as="nav"
      align="center"
      justify="center"
      wrap="nowrap"
      padding="1.5rem"
      bg="white"
      color="blue.800"
      flexDir='column'
      boxShadow="dark-lg"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"0rem"} padding='4' textAlign='center'>
          Engelli Araç Aparatları EN-AR
        </Heading>
      </Flex>

      <Flex display={{ base: "block", md: "none" }} onClick={handleToggle}>
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

      <Flex
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={0.1}
        justify='center'
      >
        <MenuItems>
          <Link href='/' _hover={{stroke : 'white' , opacity : '70%'}}>
            Anasayfa
          </Link>
        </MenuItems>
        <Menu>
  <MenuButton as={Button} bg='white' mr='1rem'>
    Ürünlerimiz
  </MenuButton>
  <MenuList>
    <MenuItem><Link href='/sag-ayak-engelli'>
Sağ Ayak Engelli
</Link></MenuItem>
    <MenuItem><Link href='/elden-gaz-kilitli'>
İki Ayak Engelli Pro
</Link></MenuItem>
    <MenuItem><Link href='/elden-gaz'>
    İki Ayak Engelli
</Link></MenuItem>
    <MenuItem><Link href='/sol-el-engelli'>
    İki Ayak Engelli Pro
</Link></MenuItem>
  </MenuList>
</Menu>
        <MenuItems>
        <Link href='/faq' _hover={{stroke : 'white' , opacity : '70%'}}>
            Sık Sorulan Sorular
          </Link></MenuItems>
      </Flex>


    </Flex>
  );
};

export default Header;


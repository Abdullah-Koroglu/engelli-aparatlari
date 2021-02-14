import '../styles/globals.css'
import { useEffect, useState } from "react";
import Header from '../components/header'
import Footer from "../components/footer";
import { ThemeProvider , theme , CSSReset } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"




function MyApp({ Component, pageProps }) {
  const [Window , setWindow] = useState();
  useEffect(()=>{
      if (process.browser) {
          setWindow(window.innerWidth)
          console.log(window.innerWidth);
      }
  },[])  
  return (
  <ThemeProvider theme={theme}>
    <Header/>
    <CSSReset/>
    <Component {...pageProps} />
    <Footer/>
  </ThemeProvider>
  )
}

export default MyApp
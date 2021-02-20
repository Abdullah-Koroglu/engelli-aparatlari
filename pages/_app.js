import '../styles/globals.css'
import Header from '../components/header'
import Footer from "../components/footer";
import { ThemeProvider, theme, CSSReset } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"





function MyApp({ Component, pageProps, router }) {

  return (
    <ThemeProvider theme={theme}>

      <Header />
      <CSSReset />
      <AnimatePresence>
        <motion.div key="{router.route}"
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
        >
          <Component {...pageProps} />
        </motion.div></AnimatePresence>
      <Footer />
    </ThemeProvider>
  )
}

export default MyApp
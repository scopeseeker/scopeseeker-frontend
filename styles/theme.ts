import { Inter, Roboto } from "next/font/google";
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const inter = Inter({
    subsets: ['latin'],
    style: ['normal'],
    fallback: ["system-ui", "sans-serif"],
    weight: ["400", "500", "600", "700", "800"],
})

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
}

const theme = extendTheme({
    styles: {
        global: {
            body: {
            },
            a: {
                color: 'black',
                textDecoration: 'none',
                _hover: {
                    textDecoration: 'none',
                },
            },
        },
    },
    fonts: {
        heading: `${inter.style.fontFamily}`,
        body: `${inter.style.fontFamily}`,
    },
    colors: {
        brand: {
         100: "#406afe",
         200: "#2c68b8",
         300: "#406afe",
         400: "#445c8e",
        },
      },
    config,
})


export default theme;
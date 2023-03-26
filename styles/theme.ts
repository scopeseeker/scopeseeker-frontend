import { Inter, Montserrat, Roboto } from "next/font/google";
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'


const montserrat = Montserrat({ subsets: ['latin'] })
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
        heading: `${montserrat.style.fontFamily}`,
        body: `${inter.style.fontFamily}`,
    },
    colors: {
        brand: {
            100: "#406afe",
            200: "#0133e4",
            300: "#0128b2",
            400: "#E6E6FA",
        },
        secondary: {
            100: "grey",
            200: "lightgrey"
        }
    },
    config,
})


export default theme;
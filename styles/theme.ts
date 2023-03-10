import { extendTheme } from "@chakra-ui/react";
import { Inter, Roboto } from "next/font/google";

const inter = Inter({
    subsets: ['latin'],
    style: ['normal'],
    fallback: ["system-ui", "sans-serif"],
    weight: ["400", "500", "600", "700", "800"],
})

export const theme = extendTheme({

    styles: {
        global: {
            body: {
                color: 'black',
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
            "primary": "#406AFE"
        },
    },
})

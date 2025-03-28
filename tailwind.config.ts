import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                customGold:{
                    50: '#ffffe7',
                    100: '#feffc1',
                    200: '#fffd86',
                    300: '#fff441',
                    400: '#ffe60d',
                    500: '#ffd700',
                    600: '#d19e00',
                    700: '#a67102',
                    800: '#89580a',
                    900: '#74480f',
                    950: '#442604',
                },
                customSilver:{
                    50: '#f7f7f7',
                    100: '#f0f0f0',
                    200: '#e3e3e3',
                    300: '#d1d1d1',
                    400: '#c0c0c0',
                    500: '#aaaaaa',
                    600: '#969696',
                    700: '#818181',
                    800: '#6a6a6a',
                    900: '#585858',
                    950: '#333333',
                }
            }
        }
    },
}

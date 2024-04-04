import { Anek_Tamil, Poppins, Roboto } from 'next/font/google'

export const anekTamil = Anek_Tamil({
    subsets: ['latin'],
    weight: '500',
    variable: '--font-anek_tamil'
})

export const roboto = Roboto({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-roboto'
})

export const poppins = Poppins({
    subsets: ['latin'],
    weight: '500',
    variable: '--font-poppins'
})
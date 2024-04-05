import type {Metadata} from "next";
import '@/app/globals.scss';
import s from '@/app/layout.module.scss';
import {anekTamil, poppins, roboto} from "@/app/util/font";
import Nav from "@/app/components/Nav/Nav";

export const metadata: Metadata = {
    title: "STAKEME",
    description: "Case for STAKEME",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${anekTamil.variable} ${roboto.variable} ${poppins.variable}`}>
        <section className={s.main}>
            <Nav/>
            {children}
        </section>
        </body>
        </html>
    );
}

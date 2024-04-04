import type {Metadata} from "next";
import  './globals.scss';
import s from './layout.module.scss';
import {anekTamil, poppins, roboto} from "@/util/font";
import Nav from "@/components/Nav/Nav";

export const metadata: Metadata = {
  title: "Validators",
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

import "./globals.css";
import localFont from "next/font/local";
import { Inter  } from 'next/font/google'
import { Miniver } from 'next/font/google';
import { Sanchez } from 'next/font/google';

const miniver = Miniver({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-miniver',
});
const sanchez = Sanchez({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-sanchez',
});

const inter = Inter ({ subsets: ['latin'] })
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${miniver.variable} ${sanchez.variable} antialiased overflow-x-hidden overflow-y-auto`}
      >
        {children}
      </body>
    </html>
  );
}

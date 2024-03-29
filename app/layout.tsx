import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './globals.css';
import styles from '../styles/snow.module.scss';

const snowFlakes = Array.from(Array(200).keys());
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={inter.className}>    
      <div className={`${styles.body} -z-10`}>
      {snowFlakes.map((_, index) => (
        <div key={index} className={`${styles.snow} -z-10`}>@</div>
      ))}
      </div>
      <div className='z-0'>
        {children}
      </div>
    </body>
    </html>
  );
}

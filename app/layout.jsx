import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ScrollToTopButton from "@/components/ScrollToTopButton"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mehul Kohad | CSE Student & MERN Developer",
  description:
    "Personal portfolio of Mehul Kohad, a Computer Science & Engineering student specializing in MERN development and Machine Learning.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <ScrollToTopButton />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'
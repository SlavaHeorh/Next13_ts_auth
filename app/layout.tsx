import './globals.css'
import {Metadata} from "next";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {Providers} from "@/components/Providers";

export const metadata: Metadata = {
  title: 'Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
      <Providers>
        <Header />
        <main className="container">
          {children}
        </main>
        <Footer />
      </Providers>
      </body>

    </html>
  )
}

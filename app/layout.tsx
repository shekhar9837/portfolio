import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Navbar } from "./components/Navbar";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll"
export const metadata: Metadata = {
  title: "Shekhar",
  description: "Creating innovative digital experiences, brand identities, and art direction.",
};

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "100"
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body
         
        >
          <SmoothScroll>
        <Navbar />
        {children}
        </SmoothScroll>
      </body>
    </html>
  );
}

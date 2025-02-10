import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Navbar } from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";
import ConnectPage from "./components/ConnectPage";
import { ThemeProvider } from "./components/theme-provider";
import AnimatedCursor from "react-animated-cursor";
import SmoothScroll from "./components/SmoothScroll";

export const metadata: Metadata = {
  title: "Shekhar",
  description:
    "Creating innovative digital experiences, brand identities, and art direction.",
};

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "100",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <SmoothScroll>
          <ThemeProvider attribute="class" defaultTheme="system">
            <Navbar />
            <AnimatedCursor
              innerSize={8}
              outerSize={35}
              innerScale={1}
              outerScale={1.7}
              outerAlpha={0}
              outerStyle={{
                border: "3px solid var(--cursor-color)",
              }}
              innerStyle={{
                backgroundColor: "var(--cursor-color)",
              }}
            />
            {children}
            <ConnectPage />
            <Footer />
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}

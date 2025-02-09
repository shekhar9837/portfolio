import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Navbar } from "./components/Navbar";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import Footer from "./components/Footer";
import ConnectPage from "./components/ConnectPage";
import { ThemeProvider } from "./components/theme-provider";

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
      <body>
        <SmoothScroll>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >

          <Navbar />
          {children}
          <ConnectPage />
          <Footer />
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}

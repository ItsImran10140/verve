import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap", // This is generally recommended
});

export const metadata: Metadata = {
  title: "Verve",
  description: "Verve for Businesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

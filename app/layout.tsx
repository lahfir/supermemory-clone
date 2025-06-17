import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "supermemory™",
  description: "The universal memory API for the AI era. Stop building retrieval from scratch. Personalise LLMs for your users. Built for developers who ship.",
  openGraph: {
    title: "supermemory™",
    description: "The universal memory API for the AI era. Stop building retrieval from scratch. Personalise LLMs for your users. Built for developers who ship.",
    images: [
      {
        url: "https://cdn.prod.website-files.com/6826235ef861ed9464b064c8/6826251d65991babe21a9a9a_Frame%2031.png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "supermemory™",
    description: "The universal memory API for the AI era. Stop building retrieval from scratch. Personalise LLMs for your users. Built for developers who ship.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

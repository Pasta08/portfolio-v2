import type { Metadata } from "next";
import localFont from "next/font/local";
import "../app/styles/globals.css";
import Head from "next/head";


export const metadata: Metadata = {
  title: "Ethan Portfolio V2",
  description: "Ethan's website v2.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
          <meta name="format-detection" content="telephone-no"/>
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}

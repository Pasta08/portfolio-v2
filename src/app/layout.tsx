import type { Metadata } from "next";
import localFont from "next/font/local";
import "../app/styles/globals.css";


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
      <body>
        {children}
      </body>
    </html>
  );
}

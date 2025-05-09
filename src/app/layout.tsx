import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "App & Web Developer portfolio | Piotr Blazejak",
  description: "Welcome to my portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

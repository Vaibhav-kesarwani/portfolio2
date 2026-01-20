import Navbar from "@/components/navbar/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const cabinet = localFont({
  src: [
    {
      path: "../public/fonts/CabinetGrotesk-Variable.woff2",
      weight: "100 900",
    },
  ],
  variable: "--font-cabinet",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Vaibhav Kesarwnai Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${cabinet.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

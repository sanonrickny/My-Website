import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rickny Sanon - AI Software Engineer & Full-Stack Developer",
  description:
    "Professional portfolio of Rickny Sanon, AI Software Engineer and Full-Stack Developer. Computer Science student at FIU specializing in AI/ML, web development, and cloud technologies.",
  keywords: [
    "Rickny Sanon",
    "Software Engineer",
    "AI Engineer",
    "Full-Stack Developer",
    "React",
    "Python",
    "Machine Learning",
    "Miami",
  ],
  authors: [
    { name: "Rickny Sanon", url: "https://linkedin.com/in/sanonrickny" },
  ],
  openGraph: {
    title: "Rickny Sanon - AI Software Engineer & Full-Stack Developer",
    description:
      "Professional portfolio showcasing AI/ML projects, full-stack development, and innovative solutions.",
    url: "https://ricknysanon.dev",
    siteName: "Rickny Sanon Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rickny Sanon - AI Software Engineer & Full-Stack Developer",
    description:
      "Professional portfolio showcasing AI/ML projects, full-stack development, and innovative solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      </body>
    </html>
  );
}

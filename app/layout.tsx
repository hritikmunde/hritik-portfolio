import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hritik Munde | DevOps Engineer & Cloud Architect",
  description: "Portfolio of Hritik Munde, a DevOps Engineer specializing in AWS, Kubernetes, Terraform, and Cloud Security. View projects, skills, and experience.",
  keywords: ["DevOps", "Cloud Engineer", "AWS", "Kubernetes", "Terraform", "Docker", "CI/CD", "Hritik Munde", "Portfolio"],
  openGraph: {
    title: "Hritik Munde | DevOps Engineer",
    description: "Building reliable infrastructure and automating the boring stuff.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

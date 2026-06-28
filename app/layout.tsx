import type { Metadata, Viewport } from "next";
import "./globals.css";
import { personal } from "@/data/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL("https://saksham-sharma.vercel.app"),
  title: {
    default: `${personal.name} | Cloud & DevOps Engineer`,
    template: `%s | ${personal.name}`
  },
  description:
    "Premium software engineer portfolio for Saksham Sharma, a Cloud & DevOps Engineer and Backend Developer building scalable cloud infrastructure and intelligent systems.",
  keywords: [
    "Saksham Sharma",
    "Cloud Engineer",
    "DevOps Engineer",
    "Backend Developer",
    "AWS",
    "FastAPI",
    "Docker",
    "Terraform",
    "Python"
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  openGraph: {
    title: `${personal.name} | Cloud & DevOps Engineer`,
    description: personal.shortDescription,
    url: "https://saksham-sharma.vercel.app",
    siteName: `${personal.name} Portfolio`,
    images: [
      {
        url: "/images/saksham-profile.jpeg",
        width: 1280,
        height: 720,
        alt: `${personal.name} portfolio cover`
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: `${personal.name} | Cloud & DevOps Engineer`,
    description: personal.shortDescription,
    images: ["/images/saksham-profile.jpeg"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030712"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    // "dark" class is permanently applied — no theme toggling
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}

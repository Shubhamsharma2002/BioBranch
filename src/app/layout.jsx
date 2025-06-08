import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Biobranch",
  description: "🌿 BioBranch BioBranch is a modern, customizable Linktree clone that lets users create and manage a personalized bio page to showcase all their important links in one place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

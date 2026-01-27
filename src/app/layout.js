import { Geist, Geist_Mono, Forum } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const forum = Forum({
  variable: "--font-forum",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Justivo - Justice. Advocacy. Results.",
  description: "A premium law firm dedicated to providing excellent legal services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${forum.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

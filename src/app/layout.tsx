import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Purple Space",
  description: "Purple Space의 보라빛 공간입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className="h-[400vh] scrollbar-thin  scrollbar-track-slate-700 scrollbar-thumb-purple-300">
        <Header />
        {children}
      </body>
    </html>
  );
}

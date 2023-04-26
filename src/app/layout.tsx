import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { getJSONData } from "@/service/staticData";
import { HeaderMenuList } from "@/types/headerMenu.type";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Purple Space",
  description: "Purple Space의 보라빛 공간입니다.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerMenu = (await getJSONData("headerMenu")) as HeaderMenuList;

  return (
    <html lang="en" className="">
      <body className="flex-1 scrollbar-thin  scrollbar-track-slate-700 scrollbar-thumb-purple-300">
        <Header headerMenu={headerMenu} />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

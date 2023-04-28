import Footer from '@/components/Footer';
import Header from '@/components/Header';
import UtilProvidor from '@/provider/UtilProvider';

import { addIntlUtilAsPrototypeMethod } from '@/util/intl';
import { getJSONData } from '@/service/staticData';

import type { HeaderMenuList } from '@/types/headerMenu.type';
import { Inter } from 'next/font/google';
import './globals.css';

addIntlUtilAsPrototypeMethod();

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Purple Space',
	description: 'Purple Space의 보라빛 공간입니다.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const headerMenu = (await getJSONData('headerMenu')) as HeaderMenuList;

	return (
		<html lang="en" className="">
			<body className="flex-1 scrollbar-thin  scrollbar-track-slate-700 scrollbar-thumb-purple-300">
				<UtilProvidor>
					<Header headerMenu={headerMenu} />
					<main className="min-h-screen">{children}</main>
					<Footer />
				</UtilProvidor>
			</body>
		</html>
	);
}

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import UtilProvidor from '@/provider/UtilProvider';

import { addIntlUtilAsPrototypeMethod } from '@/util/intl';
import { getJSONData } from '@/service/staticData';

import type { HeaderMenuList } from '@/types/headerMenu.type';
import { Open_Sans } from 'next/font/google';
import './globals.css';

addIntlUtilAsPrototypeMethod();

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
	title: 'Purple Space',
	description: 'Purple Space의 보라빛 공간입니다.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const headerMenu = (await getJSONData('headerMenu')) as HeaderMenuList;

	return (
		<UtilProvidor>
			<html lang="en" className={openSans.className}>
				<body className="flex flex-col w-full max-w-screen-2xl m-auto scrollbar-thin  scrollbar-track-slate-700 scrollbar-thumb-purple-300">
					<Header headerMenu={headerMenu} />
					<main className="grow">{children}</main>
					<Footer />
				</body>
			</html>
		</UtilProvidor>
	);
}

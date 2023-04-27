'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { BiMenu } from 'react-icons/bi';
import { IoMdClose } from 'react-icons/io';
import logoImg from '../../public/Images/pspace_logo.png';

import type { HeaderMenuList } from '@/types/headerMenu.type';

interface HeaderProps {
	headerMenu: HeaderMenuList;
}

export default function Header({ headerMenu }: HeaderProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<header className="sticky top-0 z-20">
				<div className="relative z-20 w-full h-[64px] px-4 flex items-center justify-center backdrop-blur border-b border-tertiary sm:justify-between">
					<div className="flex items-center gap-2">
						<Link href="/home" className="w-[50px] h-[50px]">
							<Image src={logoImg} alt="logo" />
						</Link>
						<Link href="/home">
							<h1 className="text-[20px]">Purple Space</h1>
						</Link>
					</div>
					<nav className="hidden sm:block">
						<ul className="flex flex-row gap-4">
							{headerMenu.map(menu => (
								<Link key={menu.id} href={menu.link}>
									<li className="py-4 hover:opacity-50">{menu.name}</li>
								</Link>
							))}
						</ul>
					</nav>
					<div className="absolute top-4 right-4 sm:hidden cursor-pointer">
						{isOpen ? (
							<IoMdClose size={26} onClick={() => setIsOpen(false)} />
						) : (
							<BiMenu size={26} onClick={() => setIsOpen(true)} />
						)}
					</div>
				</div>

				<ul
					className={`absolute z-10 w-full backdrop-blur border-b border-tertiary duration-500 ease-in-out sm:hidden
          ${isOpen ? 'top-[64px]' : 'top-[-300px]'}
          ${isOpen ? 'opacity-100' : 'opacity-0'}`}
				>
					{headerMenu.map(menu => (
						<Link key={menu.id} href={menu.link}>
							<li
								className="text-center py-4 hover:opacity-50"
								onClick={() => setIsOpen(false)}
							>
								{menu.name}
							</li>
						</Link>
					))}
				</ul>
			</header>
		</>
	);
}

/*
 * Copyright (c) 2022. AspieCoder
 */

'use client';

import * as React from 'react';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { navPages } from '@utils/navPages';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

const NavBar = (): JSX.Element => {
	const pathname = usePathname();
	return (
		<Disclosure as="nav">
			{({ open }) => (
				<div className="bg-black drop-shadow-md">
					<nav className="sticky top-0 z-50 flex items-center justify-between py-5 text-white pt-4 max-w-screen-xl  mx-auto px-4 xl:px-0">
						<div>
							<Link href="/">AspieCoder.com</Link>
						</div>
						{/*Mobile friendly navbar button */}
						<div className="sm:hidden">
							<Disclosure.Button>
								{open ? (
									<XMarkIcon className="block h-6 w-6" aria-hidden="true" />
								) : (
									<Bars3Icon className="h-5 w-5" aria-hidden="true" />
								)}
							</Disclosure.Button>
						</div>
						{/*	Desktop menu*/}
						<div className="hidden sm:block space-x-20">
							{navPages.map(({ url, page }, i) => (
								<Link
									key={`desktop-${i}`}
									className={`text-lg hover:underline hover:underline-offset-8 ${
										pathname === url
											? 'font-bold underline underline-offset-8'
											: 'text-white font-light'
									}`}
									href={url}
								>
									{page}
								</Link>
							))}
						</div>
					</nav>

					<Disclosure.Panel className="space-y-1 px-2 pt-2 pb-3 flex flex-col bg-black text-white pl-5">
						{navPages.map(({ page, url }, i) => (
							<Link href={url} key={i} className="outline:none">
								{page}
							</Link>
						))}
					</Disclosure.Panel>
				</div>
			)}
		</Disclosure>
	);
};

export default NavBar;

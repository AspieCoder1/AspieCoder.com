/*
 * Copyright (c) 2022. AspieCoder
 */

import * as React from 'react';
import { ForwardedRef, forwardRef, ReactNode } from 'react';
import Link from 'next/link';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { navPages } from '@utils/navPages';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

const MyLink = forwardRef<HTMLAnchorElement, any>(
	(
		props: {
			href: string;
			children: ReactNode;
			className: string;
		},
		ref: ForwardedRef<HTMLAnchorElement>
	) => {
		let { href, children } = props;
		return (
			<Link href={href} passHref>
				<a className="outline:none" ref={ref}>
					{children}
				</a>
			</Link>
		);
	}
);

MyLink.displayName = 'NextLinkElement';

const NavBar = (): JSX.Element => {
	const { pathname } = useRouter();
	return (
		<Disclosure as="nav">
			{({ open }) => (
				<div className="bg-black drop-shadow-md">
					<nav className="sticky top-0 z-50 flex items-center justify-between py-5 text-white pt-4 max-w-screen-xl  mx-auto px-4 md:px-0">
						<div>
							<Link href="/" passHref>
								<a className="font-mono">AspieCoder.com</a>
							</Link>
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
								<Link key={`desktop-${i}`} href={url} passHref>
									<a
										className={`text-lg hover:underline hover:underline-offset-8 ${
											pathname === url
												? 'font-bold underline underline-offset-8'
												: 'text-white font-light'
										}`}
									>
										{page}
									</a>
								</Link>
							))}
						</div>
					</nav>

					<Disclosure.Panel className="space-y-1 px-2 pt-2 pb-3 flex flex-col bg-black text-white pl-5">
						{navPages.map(({ page, url }, i) => (
							<MyLink key={i} href={url}>
								{page}
							</MyLink>
						))}
					</Disclosure.Panel>
				</div>
			)}
		</Disclosure>
	);
};

export default NavBar;

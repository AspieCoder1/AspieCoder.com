/*
 * Copyright (c) 2022. AspieCoder
 */

import * as React from 'react';
import Link from 'next/link';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';
import NavBarDesktop from '@components/NavBar/NavBarDesktop';
import NavBarMobile from '@components/NavBar/NavBarMobile';
import { useMediaQuery } from 'react-responsive';

const config = resolveConfig(tailwindConfig);

const NavBar = (): JSX.Element => {
	//@ts-ignore
	const query = `(min-width: ${config.theme?.screens?.lg})`;

	const matches = useMediaQuery({
		query,
	});
	return (
		<nav className="sticky top-0 z-50 flex items-center justify-between md:px-20 px-4 py-5 bg-black text-white pt-4 w-full drop-shadow-md">
			<div>
				<Link href="/" passHref>
					<a className="font-mono">AspieCoder.com</a>
				</Link>
			</div>
			{matches && <NavBarDesktop key="desktop-menu" />}
			{!matches && <NavBarMobile key="mobile-menu" />}
		</nav>
	);
};

export default NavBar;

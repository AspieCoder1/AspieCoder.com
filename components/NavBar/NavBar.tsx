/*
 * Copyright (c) 2022. AspieCoder
 */

import * as React from 'react';
import Link from 'next/link';
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';
import NavBarDesktop from '@components/NavBar/NavBarDesktop';

const config = resolveConfig(tailwindConfig);

const NavBar = (): JSX.Element => {
	return (
		<nav className="sticky top-0 z-50 flex justify-between md:px-20 px-4 py-5 bg-black text-white pt-4 w-full">
			<div>
				<Link href="/" passHref>
					<a>AspieCoder.com</a>
				</Link>
			</div>
			<NavBarDesktop />
		</nav>
	);
};

export default NavBar;

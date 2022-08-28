/*
 * Copyright (c) 2022. AspieCoder
 */

import Link from 'next/link';
import * as React from 'react';

const NavBarDesktop = (): JSX.Element => {
	return (
		<div className="grid grid-rows-1 grid-flow-col gap-20">
			<Link href="/pages/blog" passHref>
				<a className="text-xl text-bold">Blog</a>
			</Link>
			<Link href="/about" passHref>
				<a className="text-xl text-bold">About</a>
			</Link>
		</div>
	);
};

export default NavBarDesktop;

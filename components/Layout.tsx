/*
 * Copyright (c) 2022. AspieCoder
 */

import * as React from 'react';
import Footer from '@components/Footer';
import NavBar from '@components/NavBar/NavBar';

type Props = {
	displayFooter?: boolean;
	children: React.ReactNode;
};

const Layout = ({ children, displayFooter = true }: Props): JSX.Element => {
	return (
		<div className="min-h-screen bg-gray-100 flex flex-col m-0">
			<NavBar />
			<div className="flex-1 m-0 flex">{children}</div>
			{displayFooter && <Footer />}
		</div>
	);
};

export default Layout;

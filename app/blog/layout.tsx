/*
 * Copyright (c) 2023. AspieCoder
 */

import NavBar from '@components/NavBar';
import Footer from '@components/Footer';
import * as React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => (
	<div className="min-h-screen bg-gray-100 flex flex-col m-0">
		<NavBar />
		<div className="flex-1 m-0 flex flex-col">{children}</div>
		<Footer />
	</div>
);

export default Layout;

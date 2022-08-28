/*
 * Copyright (c) 2022. AspieCoder
 */

import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@components/Layout';

const Home: NextPage<{}, {}> = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Head>
				<title>AspieCoder.com</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout displayFooter={false}>
				<main className="flex-1 flex text-center bg-black text-white items-center flex-col justify-center">
					<h1 className="md:text-9xl text-4xl md:mb-10 mb-5">AspieCoder.com</h1>
					<h2 className="md:text-7xl text-2xl">Welcome to the site!</h2>
				</main>
			</Layout>
		</div>
	);
};

export default Home;

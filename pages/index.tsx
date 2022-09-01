/*
 * Copyright (c) 2022. AspieCoder
 */

import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@components/Layout';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

const Home: NextPage<{}, {}> = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Head>
				<title>Home | AspieCoder.com</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout displayFooter={false}>
				<main className="flex-1 flex text-center grad-4 text-white items-center flex-col justify-center">
					<h1 className="lg:text-9xl md:text-7xl text-4xl md:mb-10 mb-5 font-mono">
						AspieCoder.com
					</h1>
					<div className="flex content-center mx-auto space-x-5 md:space-x-10">
						<a href="https://github.com/AspieCoder1">
							<AiFillGithub
								className="w-12 h-12 md:w-16 md:h-16"
								color="white"
							/>
						</a>
						<a href="https://www.linkedin.com/in/luke-braithwaite/">
							<AiFillLinkedin
								className="w-12 h-12 md:w-16 md:h-16"
								color="white"
							/>
						</a>
					</div>
				</main>
			</Layout>
		</div>
	);
};

export default Home;

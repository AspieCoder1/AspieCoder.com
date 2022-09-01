/*
 * Copyright (c) 2022. AspieCoder
 */

import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@components/Layout';
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image';

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
					<div className="mt-10 flex mx-auto grid grid-rows-1 grid-flow-col gap-5">
						<a href="https://github.com/AspieCoder1">
							<Image
								alt="Github logo"
								width={64}
								height={64}
								src="/icons/Github.png"
							/>
						</a>
						<SocialIcon
							url="https://www.linkedin.com/in/luke-braithwaite/"
							bgColor="white"
							fgColor="transparent"
							style={{ height: 64, width: 64 }}
						/>
					</div>
				</main>
			</Layout>
		</div>
	);
};

export default Home;

/*
 * Copyright (c) 2023. AspieCoder
 */

import type { Metadata } from 'next';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import NavBar from '@components/NavBar/NavBar';
import Footer from '@components/Footer';
import CV from './cv';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';

import * as React from 'react';

import 'react-vertical-timeline-component/style.min.css';
import Link from 'next/link';
import Contact from './contact';

const IconBulletPoint = ({
	icon,
	text,
}: {
	icon: React.ReactNode;
	text: string;
}) => (
	<div className="flex items-center space-x-3">
		{icon}
		<span>{text}</span>
	</div>
);

export const metadata: Metadata = {
	title: 'Home | AspieCoder.com',
};

const Page = () => {
	return (
		<>
			{/* Hero section */}
			<div className="min-h-screen flex flex-col">
				<NavBar />
				<main className="grad-4-1 text-white px-4 flex-1 flex items-center justify-center">
					<div className="bg-black md:p-24 p-8  bg-opacity-25">
						<h1 className="lg:text-8xl md:text-4xl text-xl font-bold">
							Luke Braithwaite
						</h1>
						<h2 className="md:text-3xl text-md font-light">
							First Class Computer Science Graduate @ The University of
							Manchester
						</h2>
						<div className="pt-4 flex space-x-3 md:space-x-6">
							<Link href="https://github.com/AspieCoder1">
								<AiFillGithub
									className="w-8 h-8 md:w-16 md:h-16"
									color="white"
								/>
							</Link>
							<Link href="https://www.linkedin.com/in/luke-braithwaite/">
								<AiFillLinkedin
									className="w-8 h-8 md:w-16 md:h-16"
									color="white"
								/>
							</Link>
						</div>
					</div>
				</main>
			</div>

			{/* About section */}
			<section
				className="md:prose-xl prose mx-auto max-w-screen-xl md:py-16 py-8 xl:px-0 px-4"
				id="about"
			>
				<h2 className="text-3xl text-purple-900 font-bold mx-auto max-w-screen-xl w-full md:pb-4">
					About
				</h2>
				<p>
					I have just completed my BSc in computer science at the University of
					Manchester where I graduated with first-class honours. My dissertation{' '}
					<i>Bias and Variance in Machine Learning</i> was supervised by{' '}
					<a href="https://profgavinbrown.github.io/">Professor Gavin Brown</a>{' '}
					and discussed how the bias-variance tradeoff can be used to describe
					the behaviour of machine learning models. During my degree I
					specialised in machine learning theory, I am particularly interested
					in exploring how we can develop theories to understand and explain the
					generalisation of deep neural networks.
				</p>
				<p>
					In October 2023, I will begin studying the MPhil in Advanced Computer
					Science at the University of Cambridge as a member of Peterhouse.
					During this time I hope to expand upon my knowledge of deep learning
					theory and machine learning more generally.
				</p>
			</section>

			{/* CV stuff */}
			<CV />

			{/* Services */}
			<section className=" md:prose-xl prose mx-auto max-w-screen-xl md:pb-16 pb-8  xl:px-0 px-4">
				<h2
					className="text-purple-900 font-bold mx-auto max-w-screen-xl w-full md:pb-4"
					id="services"
				>
					Services
				</h2>
				<p>
					Does your business need a website? If so I offer a web development
					service to create a custom and adaptive website for your business.
					Unlike other web developers I do not use a website builder, all of my
					websites are built using the <a href="https://nextjs.org/">Next.js</a>{' '}
					framework. This allows me to build a high-performance website quickly
					and gives you the scope to grow with a mature tech stack and
					future-proofs the final site.
				</p>
				<h4>What is included</h4>
				<div className="grid grid-cols-1 gap-3 pl-3">
					<IconBulletPoint
						icon={
							<CheckIcon className="p-2 shrink-0 rounded-full h-8 w-8 bg-white text-green-800" />
						}
						text="A custom high-performance website built with a modern technology stack"
					/>
					<IconBulletPoint
						icon={
							<CheckIcon className="p-2 shrink-0 rounded-full h-8 w-8 bg-white text-green-800" />
						}
						text="Responsive design that adapts to mobile and tablet devices"
					/>
					<IconBulletPoint
						icon={
							<CheckIcon className="p-2 shrink-0 rounded-full h-8 w-8 bg-white text-green-800" />
						}
						text="Initial deployment and hosting support"
					/>
					<IconBulletPoint
						icon={
							<CheckIcon className="p-2 shrink-0 rounded-full h-8 w-8 bg-white text-green-800" />
						}
						text="Implementation with a CMS to allow you to update the content of the site"
					/>
				</div>
				<h4>What is not included</h4>
				<div className="grid grid-cols-1 gap-3 pl-3">
					<IconBulletPoint
						icon={
							<XMarkIcon className="p-2 shrink-0 rounded-full h-8 w-8 text-red-900 bg-white" />
						}
						text="Graphic design or image editing"
					/>
					<IconBulletPoint
						icon={
							<XMarkIcon className="p-2 shrink-0 rounded-full h-8 w-8 text-red-900 bg-white" />
						}
						text="Copy writing or editing"
					/>
					<IconBulletPoint
						icon={
							<XMarkIcon className="p-2 shrink-0 rounded-full h-8 w-8 text-red-900 bg-white" />
						}
						text="SEO optimisation"
					/>
				</div>
				<h4>Prices</h4>
				<p>
					Every single project will have a different scope and features, so the
					price will vary dependent on the size and complexity of the project.
					If you would like to work with me on a project please complete the
					contact form below and I will arrange a meeting to discuss the project
					with you.
				</p>
				<h4>Questions?</h4>
				<p>
					I you have any questions please use the contact form at the bottom of
					the page and I endeavour to respond as soon as possible.
				</p>
			</section>

			{/* Contact */}
			<Contact />

			<Footer />
		</>
	);
};

export default Page;

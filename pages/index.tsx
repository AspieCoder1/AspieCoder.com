/*
 * Copyright (c) 2022. AspieCoder
 */

import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '@components/Layout';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import NavBar from '@components/NavBar/NavBar';
import Footer from '@components/Footer';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarIcon from '@mui/icons-material/Star';
import * as React from 'react';

// @ts-ignore
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Home: NextPage<{}, {}> = () => {
	return (
		<div className="bg-gray-100">
			<Head>
				<title>Home | AspieCoder.com</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="grad-4-1 text-white px-4 min-h-screen flex justify-center items-center">
				<div className="bg-black md:p-24 p-8  bg-opacity-25 border-white border-2">
					<h1 className="lg:text-8xl md:text-4xl text-xl font-bold">
						Luke Braithwaite
					</h1>
					<h2 className="md:text-3xl text-md font-light">
						First Class Computer Science Graduate @ University of Manchester
					</h2>
					<div className="pt-4 flex space-x-3 md:space-x-6">
						<a href="https://github.com/AspieCoder1">
							<AiFillGithub className="w-8 h-8 md:w-16 md:h-16" color="white" />
						</a>
						<a href="https://www.linkedin.com/in/luke-braithwaite/">
							<AiFillLinkedin
								className="w-8 h-8 md:w-16 md:h-16"
								color="white"
							/>
						</a>
					</div>
				</div>
			</main>
			<section className="text-justify md:prose-xl prose mx-auto max-w-screen-xl pb-8 pt-32 md:px-0 px-4">
				<h2 className="text-3xl text-purple-900 font-bold mx-auto max-w-screen-xl w-full pb-4">
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
					generalisation of deep neural networks. In October 2023, I will begin
					studying the MPhil in Advanced Computer Science at the University of
					Cambridge as a member of Peterhouse. During this time I hope to expand
					upon my knowledge of deep learning theory and machine learning more
					generally.
				</p>
			</section>

			<h2 className="text-3xl text-purple-900 font-bold mx-auto max-w-screen-xl w-full pb-4">
				Experience and education
			</h2>
			<VerticalTimeline className="pb-8">
				<VerticalTimelineElement
					date="2020 &mdash; 2023"
					iconStyle={{ background: '#991b1b', color: '#fff' }}
					icon={<SchoolIcon />}
				>
					<h3 className="text-lg font-bold">
						Bachelor of Science in Computer Science, 1st Class
					</h3>
					<h4>University of Manchester</h4>
					<ul className="list-disc list-inside pt-2">
						<li>Final year project: Bias and Variance in Machine Learning</li>
						<li>Final year project mark: 80.4/100</li>
						<li>2021 &mdash; 2022: Hackathons Co-Lead for the CS society</li>
					</ul>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="Sep 2022 &mdash; Jun 2023"
					iconStyle={{ background: '#1e3a8a', color: '#fff' }}
					icon={<WorkIcon />}
				>
					<h3 className="text-lg font-bold">Dev Team Member</h3>
					<h4>UniCS</h4>
					<ul className="list-disc list-inside pt-2">
						<li>
							Designed, developed and managed the CS society&apos;s applications
							and websites
						</li>
						<li>
							Implemented new CMS system to improve efficiency of page updates
						</li>
						<li>Managed and refactored internal hackathon management system</li>
					</ul>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="Jun 2022 &mdash; Sep 2022"
					iconStyle={{ background: '#1e3a8a', color: '#fff' }}
					icon={<WorkIcon />}
				>
					<h3 className="text-lg font-bold">
						Graduate Software Engineer (Intern) &mdash; ML & Data
					</h3>
					<h4>THG</h4>
					<ul className="list-disc list-inside pt-2">
						<li>
							Developed statistical simulation of server usage for cloud service
							division to estimate expected profits from initial conditions
						</li>
						<li>
							Developed transformer-based produce recomendation system using the
							NVIDIA Merlin framework and PyTorch
						</li>
					</ul>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="Sep 2022 &mdash; Jun 2023"
					iconStyle={{ background: '#1e3a8a', color: '#fff' }}
					icon={<WorkIcon />}
				>
					<h3 className="text-lg font-bold">Software Engineer</h3>
					<h4>Imago &emdash; The Student Software Company</h4>
					<ul className="list-disc list-inside pt-2">
						<li>
							Open-sourced a research application for automating data cleaning
							developed in the Department of Computer Science
						</li>
						<li>Documented a large legacy Java codebase from scratch</li>
						<li>
							Designed and planned an application re-architecture to support a
							pipeline-based approach with data streams
						</li>
					</ul>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					iconStyle={{ background: '#14532d', color: '#fff' }}
					icon={<StarIcon />}
				/>
			</VerticalTimeline>
			<Footer />
		</div>
	);
};

export default Home;

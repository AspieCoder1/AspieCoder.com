/*
 * Copyright (c) 2022. AspieCoder
 */

import type { NextPage } from 'next';
import Head from 'next/head';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import NavBar from '@components/NavBar/NavBar';
import Footer from '@components/Footer';
import { FaPython } from 'react-icons/fa';
import { MdOutlineWork, MdSchool, MdStar } from 'react-icons/md';
import { useForm, ValidationError } from '@formspree/react';

import * as React from 'react';

import {
	VerticalTimeline,
	VerticalTimelineElement,
	// @ts-ignore
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

const Home: NextPage<{}, {}> = () => {
	const [state, handleSubmit] = useForm('xeqbeyov');

	return (
		<div className="bg-gray-100">
			<Head>
				<title>Home | AspieCoder.com</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Hero section */}
			<div className="min-h-screen">
				<NavBar />
				<main className="grad-4-1 text-white px-4 min-h-screen flex justify-center items-center">
					<div className="bg-black md:p-24 p-8  bg-opacity-25">
						<h1 className="lg:text-8xl md:text-4xl text-xl font-bold">
							Luke Braithwaite
						</h1>
						<h2 className="md:text-3xl text-md font-light">
							First Class Computer Science Graduate @ The University of
							Manchester
						</h2>
						<div className="pt-4 flex space-x-3 md:space-x-6">
							<a href="https://github.com/AspieCoder1">
								<AiFillGithub
									className="w-8 h-8 md:w-16 md:h-16"
									color="white"
								/>
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
			</div>

			{/* About section */}
			<section
				className="text-justify md:prose-xl prose mx-auto max-w-screen-xl pb-16 pt-16 md:px-0 px-4"
				id="about"
			>
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

			{/* CV stuff */}
			<section className=" md:prose-xl prose mx-auto max-w-screen-xl pb-16 md:px-0 px-4">
				<h2 className="text-3xl text-purple-900 font-bold mx-auto max-w-screen-xl w-full pb-4">
					Experience and Education
				</h2>
				<VerticalTimeline animate={false} className="pb-8">
					<VerticalTimelineElement
						date="2020 &ndash; 2023"
						iconStyle={{ background: '#991b1b', color: '#fff' }}
						icon={<MdSchool />}
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
						date="Sep 2022 &ndash; Jun 2023"
						iconStyle={{ background: '#1e3a8a', color: '#fff' }}
						icon={<MdOutlineWork />}
					>
						<h3 className="text-lg font-bold">Dev Team Member</h3>
						<h4>UniCS</h4>
						<ul className="list-disc list-inside pt-2">
							<li>
								Designed, developed and managed the CS society&apos;s
								applications and websites
							</li>
							<li>
								Implemented new CMS system to improve efficiency of page updates
							</li>
							<li>
								Managed and refactored internal hackathon management system
							</li>
						</ul>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						date="Jun 2022 &ndash; Sep 2022"
						iconStyle={{ background: '#1e3a8a', color: '#fff' }}
						icon={<MdOutlineWork />}
					>
						<h3 className="text-lg font-bold">
							Graduate Software Engineer (Intern) &mdash; ML & Data
						</h3>
						<h4>THG</h4>
						<ul className="list-disc list-inside pt-2">
							<li>
								Developed statistical simulation of server usage for cloud
								service division to estimate expected profits from initial
								conditions
							</li>
							<li>
								Developed transformer-based produce recomendation system using
								the NVIDIA Merlin framework and PyTorch
							</li>
						</ul>
					</VerticalTimelineElement>
					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						date="Sep 2022 &ndash; Jun 2023"
						iconStyle={{ background: '#1e3a8a', color: '#fff' }}
						icon={<MdOutlineWork />}
					>
						<h3 className="text-lg font-bold">Software Engineer</h3>
						<h4>Imago &mdash; The Student Software Company</h4>
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
						icon={<MdStar />}
					/>
				</VerticalTimeline>
			</section>

			{/* Skills */}
			{/*<section className="text-justify md:prose-xl prose mx-auto max-w-screen-xl pb-16 md:px-0 px-4">*/}
			{/*	<h2 className="text-3xl text-purple-900 font-bold mx-auto max-w-screen-xl w-full pb-4">*/}
			{/*		Skills*/}
			{/*	</h2>*/}
			{/*	<div className="flex space-x-16 mx-auto">*/}
			{/*		<div className="rounded bg-white drop-shadow-md p-8">*/}
			{/*			<FaPython*/}
			{/*				className="mx-auto w-24 h-24 rounded-full p-2 border-4 border-gray-100 drop-shadow-sm"*/}
			{/*				color="white"*/}
			{/*				style={{ background: '#306998' }}*/}
			{/*			/>*/}
			{/*			<h4>Python</h4>*/}
			{/*			<p>Some random test text that is very long</p>*/}
			{/*		</div>*/}
			{/*		<div className="rounded bg-white drop-shadow-md">*/}
			{/*			<p>Card test</p>*/}
			{/*		</div>*/}
			{/*		<div className="rounded bg-white drop-shadow-md">*/}
			{/*			<p>Card test</p>*/}
			{/*		</div>*/}
			{/*	</div>*/}
			{/*</section>*/}

			{/* Services */}
			<section className=" md:prose-xl prose mx-auto max-w-screen-xl pb-16 md:px-0 px-4">
				<h2 className="text-3xl text-purple-900 font-bold mx-auto max-w-screen-xl w-full pb-4">
					Services
				</h2>
				<Disclosure as="div">
					{({ open }) => (
						<>
							<Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 items-center">
								<span>Tutoring</span>
								<ChevronUpIcon
									className={`${
										open ? 'rotate-180 transform' : ''
									} h-5 w-5 text-purple-500`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500">
								I can offer my services as an tutor for the following subjects:
								<ul>
									<li>A-Level Maths</li>
									<li>GCSE Maths</li>
									<li>Coding and general programming help</li>
								</ul>
								<h4>Qualifications</h4>
								In addition to a bachelors degree in computer science, I have
								A-levels in:
								<ul>
									<li>Maths (A*)</li>
									<li>Further Maths (A*)</li>
									<li>Geography (A*)</li>
									<li>Chemistry (A)</li>
								</ul>
								If you are interested in this service please use the contact
								form down below.
								<h4>Prices</h4>
								For tutoring I charge an hourly rate of £25/hr.
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				<Disclosure as="div" className="mt-2">
					{({ open }) => (
						<>
							<Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 items-center">
								<span>Web development</span>
								<ChevronUpIcon
									className={`${
										open ? 'rotate-180 transform' : ''
									} h-5 w-5 text-purple-500`}
								/>
							</Disclosure.Button>
							<Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500">
								Do you need a website for your business? If so, I also offer web
								development services.
								<h4>Prices</h4>
								Every single project will have a different scope and features,
								so the pricing is necessarily dependent on the size and
								complexity of the project. If you would like to work with me on
								a project please complete the contact form below and I will
								arrange a meeting to discuss the project with you.
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
			</section>

			<section className=" md:prose-xl prose mx-auto max-w-screen-xl pb-16 md:px-0 px-4">
				<h2 className="text-3xl text-purple-900 font-bold mx-auto max-w-screen-xl w-full pb-4">
					Contact
				</h2>
				<p>
					Please complete in this form to inquire about either tutoring or web
					development services. I aim to reply to any messages as soon as
					possible.
				</p>
				<form className="grid grid-cols-1 gap-6" onSubmit={() => handleSubmit}>
					<label>
						<span>Email</span>
						<input
							id="email"
							type="email"
							className="form-input px-4 py-3 w-full"
							name="email"
							placeholder="john@example.com"
						/>
						<ValidationError
							prefix="Email"
							field="email"
							errors={state.errors}
						/>
					</label>

					<div className="grid grid-cols-2 gap-6">
						<label>
							<span>First name</span>
							<input
								type="text"
								className="form-input px-4 py-3 w-full"
								name="firstname"
								id="firstname"
								placeholder="First name"
							/>
							<ValidationError
								prefix="First name"
								field="firstname"
								errors={state.errors}
							/>
						</label>
						<label>
							<span>Surname</span>
							<input
								type="text"
								className="form-input px-4 py-3 w-full"
								name="surname"
								id="surname"
								placeholder="Surname"
							/>
							<ValidationError
								prefix="Surname"
								field="surname"
								errors={state.errors}
							/>
						</label>
					</div>

					<label>
						<span>I am enquiring about...</span>
						<select
							id="subject"
							name="subject"
							className="form-select px-4 py-3 w-full"
						>
							<option>Tutoring</option>
							<option>Web development</option>
						</select>
						<ValidationError
							prefix="Subject"
							field="subject"
							errors={state.errors}
						/>
					</label>

					<label>
						<span>Message</span>
						<textarea
							id="message"
							className="form-input px-4 py-3 w-full"
							name="message"
							placeholder="Please enter your message..."
						/>
						<ValidationError
							prefix="Message"
							field="message"
							errors={state.errors}
						/>
					</label>
					<div>
						<button
							className="w-full bg-purple-200 text-purple-900 py-2 disabled:bg-purple-100"
							type="submit"
							disabled={state.submitting}
						>
							Submit
						</button>
						{state.succeeded && (
							<p className="pt-1 text-gray-500">Message sent</p>
						)}
					</div>
				</form>
			</section>
			<Footer />
		</div>
	);
};

export default Home;

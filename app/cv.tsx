/*
 * Copyright (c) 2023. AspieCoder
 */

'use client';

import * as React from 'react';

import {
	VerticalTimeline,
	VerticalTimelineElement,
	// @ts-ignore
} from 'react-vertical-timeline-component';
import {
	AcademicCapIcon,
	BriefcaseIcon,
	StarIcon,
} from '@heroicons/react/24/solid';

const CV = () => {
	return (
		<section className=" md:prose-xl prose mx-auto max-w-screen-xl md:pb-16 pb-8 xl:px-0 px-4">
			<h2 className="text-3xl text-purple-900 font-bold mx-auto max-w-screen-xl w-full pb-4">
				Experience and Education
			</h2>
			<VerticalTimeline animate={false} className="pb-8">
				<VerticalTimelineElement
					date="2020 &ndash; 2023"
					iconStyle={{ background: '#991b1b' }}
					icon={<AcademicCapIcon className="text-white" />}
				>
					<h3 className="text-lg font-bold">
						Bachelor of Science in Computer Science, 1st Class
					</h3>
					<h4>University of Manchester</h4>
					<ul className="list-disc list-inside pt-2">
						<li>Final classification: 80.4/100</li>
						<li>Final year project: Bias and Variance in Machine Learning</li>
						<li>Final year project mark: 82/100</li>
						<li>2021 &mdash; 2022: Hackathons Co-Lead for the CS society</li>
					</ul>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="Sep 2022 &ndash; Jun 2023"
					iconStyle={{ background: '#1e3a8a', color: '#fff' }}
					icon={<BriefcaseIcon />}
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
					date="Jun 2022 &ndash; Sep 2022"
					iconStyle={{ background: '#1e3a8a', color: '#fff' }}
					icon={<BriefcaseIcon />}
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
							Developed transformer-based produce recommendation system using
							the NVIDIA Merlin framework and PyTorch
						</li>
					</ul>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="Sep 2022 &ndash; Jun 2023"
					iconStyle={{ background: '#1e3a8a', color: '#fff' }}
					icon={<BriefcaseIcon />}
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
					icon={<StarIcon />}
				/>
			</VerticalTimeline>
		</section>
	);
};

export default CV;

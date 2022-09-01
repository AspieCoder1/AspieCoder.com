/*
 * Copyright (c) 2022. AspieCoder
 */

import dayjs from 'dayjs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = (): JSX.Element => {
	return (
		<footer className="flex flex-col w-full items-center bg-white drop-shadow-md py-2 md:py-5">
			<h1 className="font-mono text-xl md:text-2xl">AspieCoder.com</h1>
			<p className="font-medium text-sm md:text-base">
				&copy;{dayjs().year()} Luke Braithwaite. All rights reserved.
			</p>
			<div className="mt-1 mx-auto grid grid-rows-1 grid-flow-col gap-5 ">
				<a href="https://github.com/AspieCoder1">
					<AiFillGithub className="w-8 h-8 md:w-12 md:h-12" />
				</a>
				<a href="https://www.linkedin.com/in/luke-braithwaite/">
					<AiFillLinkedin className="w-8 h-8 md:w-12 md:h-12" />
				</a>
			</div>
		</footer>
	);
};

export default Footer;

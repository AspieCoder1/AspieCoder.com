/*
 * Copyright (c) 2022. AspieCoder
 */

import dayjs from 'dayjs';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = (): JSX.Element => {
	return (
		<footer className="text-white bg-black drop-shadow-md xl:px-0 px-4">
			<div className="flex items-center justify-between max-w-screen-xl mx-auto py-2 md:py-5">
				<div>
					<h1 className="font-mono text-lg md:text-lg">AspieCoder.com</h1>
					<p className="font-light text-sm md:text-base">
						&copy;{dayjs().year()} Luke Braithwaite. All rights reserved.
					</p>
				</div>
				<div className="flex space-x-3">
					<a href="https://github.com/AspieCoder1">
						<AiFillGithub className="w-8 h-8 md:w-12 md:h-12" />
					</a>
					<a href="https://www.linkedin.com/in/luke-braithwaite/">
						<AiFillLinkedin className="w-8 h-8 md:w-12 md:h-12" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

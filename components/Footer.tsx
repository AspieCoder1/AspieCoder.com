/*
 * Copyright (c) 2022. AspieCoder
 */

import dayjs from 'dayjs';
import { SocialIcon } from 'react-social-icons';

const Footer = (): JSX.Element => {
	return (
		<footer className="flex flex-col w-full items-center bg-white drop-shadow-md py-2 md:py-5">
			<h1 className="font-mono text-xl md:text-2xl">AspieCoder.com</h1>
			<p className="font-medium text-sm md:text-base">
				&copy;{dayjs().year()} Luke Braithwaite. All rights reserved.
			</p>
			<div className="mt-1 mx-auto grid grid-rows-1 grid-flow-col gap-5 ">
				<SocialIcon
					className="w-8 h-8 md:w-16 md:h-16"
					url="https://github.com/AspieCoder1"
				/>
				<SocialIcon
					url="https://www.linkedin.com/in/luke-braithwaite/"
					className="w-7 h-7 md:w-16 md:h-16"
				/>
			</div>
		</footer>
	);
};

export default Footer;

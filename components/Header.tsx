/*
 * Copyright (c) 2022. AspieCoder
 */

import dayjs from 'dayjs';

type Props = {
	title: string;
	date: string;
	readingTime: string;
	author: string;
};

const Header = (props: Props) => {
	return (
		<header className="pt-16 pb-16 md:pt-32 md:pb-32 bg-black w-full text-center text-white drop-shadow-md">
			<h1 className=" text-2xl md:text-5xl font-bold text-white mx-10 md:mx-32">
				{props.title}
			</h1>
			<div className="flex flex-col md:flex-row md:space-x-6 items-baseline w-full content-center text-md md:text-2xl justify-center mt-7">
				<p className="text-center  w-full md:w-auto">{props.author}</p>
				<p className="text-center  w-full md:w-auto">
					{dayjs(props.date).format('MMM D, YYYY')}
				</p>
				<p className="text-center w-full md:w-auto">{props.readingTime}</p>
			</div>
		</header>
	);
};

export default Header;

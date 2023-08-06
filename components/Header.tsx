/*
 * Copyright (c) 2022. AspieCoder
 */

import dayjs from 'dayjs';

type Props = {
	title?: string | null;
	date: string;
	readingTime: string;
	author?: string | null;
};

const Header = (props: Props) => {
	return (
		<header className="pt-32 pb-8 md:pt-64 md:pb-16 grad-4-1 w-full text-white drop-shadow-md">
			<div className="max-w-screen-xl mx-auto">
				<h1 className="text-2xl md:text-5xl font-bold text-white">
					{props.title}
				</h1>
				<div className="flex flex-row md:space-x-6 w-full content-center text-md md:text-2xl mt-7 font-light">
					<p className="text-center  w-full md:w-auto">{props.author}</p>
					<p className="text-center  w-full md:w-auto">
						{dayjs(props.date).format('MMM D, YYYY')}
					</p>
					<p className="text-center w-full md:w-auto">{props.readingTime}</p>
				</div>
			</div>
		</header>
	);
};

export default Header;

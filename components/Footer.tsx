/*
 * Copyright (c) 2022. AspieCoder
 */

import dayjs from 'dayjs';

const Footer = (): JSX.Element => {
	return (
		<footer className="flex items-center justify-center w-full h-24 border-t bg-white">
			<p>&copy;{dayjs().year()} Luke Braithwaite</p>
		</footer>
	);
};

export default Footer;

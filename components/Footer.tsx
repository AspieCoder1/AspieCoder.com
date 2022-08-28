/*
 * Copyright (c) 2022. AspieCoder
 */

import dayjs from 'dayjs';

export const Footer = (): JSX.Element => {
	return (
		<footer className="flex items-center justify-center w-full h-24 border-t">
			<p>&copy;{dayjs().year()} Luke Braithwaite</p>
		</footer>
	);
};

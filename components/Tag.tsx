/*
 * Copyright (c) 2022. AspieCoder
 */

import * as React from 'react';

type Props = {
	children: React.ReactNode;
};

const Tag = ({ children }: Props): JSX.Element => {
	return (
		<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-violet-200 text-violet-700 rounded-full">
			{children}
		</div>
	);
};

export default Tag;

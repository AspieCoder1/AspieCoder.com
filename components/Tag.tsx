/*
 * Copyright (c) 2022. AspieCoder
 */

import * as React from 'react';

type Props = {
	content: string;
};

const Tag = ({ content }: Props): JSX.Element => {
	return (
		<div className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-violet-200 text-violet-700 rounded-full">
			{content}
		</div>
	);
};

export default Tag;

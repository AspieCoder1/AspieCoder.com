/*
 * Copyright (c) 2023. AspieCoder
 */

import * as React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/24/solid';

type Props = {
	title: string;
	children: React.ReactNode;
};
const FAQDisclosure = ({ title, children }: Props) => (
	<Disclosure as="div">
		{({ open }) => (
			<>
				<Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 items-center">
					<span>{title}</span>
					<ChevronUpIcon
						className={`${
							open ? 'rotate-180 transform' : ''
						} h-5 w-5 text-purple-500`}
					/>
				</Disclosure.Button>
				<Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500">
					{children}
				</Disclosure.Panel>
			</>
		)}
	</Disclosure>
);

export default FAQDisclosure;

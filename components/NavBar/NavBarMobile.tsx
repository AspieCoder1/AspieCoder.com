import { ForwardedRef, forwardRef, ReactNode } from 'react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/solid';

const MyLink = forwardRef<HTMLAnchorElement, any>(
	(
		props: { href: string; children: ReactNode; className: string },
		ref: ForwardedRef<HTMLAnchorElement>
	) => {
		let { href, children, ...rest } = props;
		return (
			<Link href={href} passHref>
				<a ref={ref} {...rest}>
					{children}
				</a>
			</Link>
		);
	}
);

MyLink.displayName = 'NextLinkElement';

const Example = (): JSX.Element => {
	return (
		<Menu as="nav" className="relative inline-block">
			<Menu.Button
				as="div"
				className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
			>
				<Bars3Icon color="white" className="h-9 w-9" aria-hidden="true" />
			</Menu.Button>
			<Transition
				enter="transition duration-100 ease-out"
				enterFrom="transform scale-95 opacity-0"
				enterTo="transform scale-100 opacity-100"
				leave="transition duration-75 ease-out"
				leaveFrom="transform scale-100 opacity-100"
				leaveTo="transform scale-95 opacity-0"
			>
				<Menu.Items className="absolute right-0 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="px-1 py-1 flex flex-col items-center">
						<Menu.Item>
							<MyLink className="text-black text-xl my-2 mx-10" href="/blog">
								Blog
							</MyLink>
						</Menu.Item>
						<Menu.Item>
							<MyLink className="text-black text-xl my-2 mx-10" href="/about">
								About
							</MyLink>
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default Example;

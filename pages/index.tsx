import MainCard from '@components/MainCard';
import PostCard from '@components/PostCard';
import { getSlugs, getSummary, TSummary } from '@utils/contentfulClient';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	mostRecent: TSummary;
	posts: TSummary[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
	const slugs = await getSlugs();
	const [mostRecent, ...posts] = await getSummary(slugs);
	return { props: { mostRecent, posts } };
};

const Home: NextPage<Props, {}> = props => {
	return (
		<div className='flex flex-col min-h-screen py-2 bg-black text-white '>
			<Head>
				<title>AspieCoder.com</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='flex flex-col mx-20 min-h-screen'>
				<header className='flex justify-between '>
					<div className='flex' id='logo'>
						<p>AspieCoder.com</p>
					</div>
					<div>
						<Link href='/search' passHref>
							<a className='text-lg'>Blog</a>
						</Link>
					</div>
				</header>
				<main className='flex flex-col items-center justify-center w-full flex-1 mt-2 text-white mx-30'>
					<div className='flex-1 text-center my-60'>
						<h1 className='text-9xl mb-10'>AspieCoder.com</h1>
						<h2 className='text-7xl'>Welcome to the site!</h2>
					</div>
					{props.mostRecent && <MainCard content={props.mostRecent} />}
					<h2 className='text-5xl w-full text-center border-b mb-10 pb-5 mt-20'>Other posts</h2>
					<div className=' my-10 grid grid-cols-5 w-full gap-6'>
						{props.posts.map((_, index) => (
							<PostCard key={index} content={props.mostRecent} />
						))}
					</div>
				</main>
				<footer className='flex items-center justify-center w-full h-24 border-t'>
					<a
						className='flex items-center justify-center'
						href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
						target='_blank'
						rel='noopener noreferrer'
					>
						Powered by <Image src='/vercel.svg' alt='Vercel Logo' className='h-4 ml-2' width={72} height={16} />
					</a>
				</footer>
			</div>
		</div>
	);
};

export default Home;

import MainCard from '@components/MainCard';
import PostCard from '@components/PostCard';
import {getSlugs, getSummary, TSummary} from '@utils/contentfulClient';
import type {GetServerSideProps, NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
    mostRecent: TSummary;
    posts: TSummary[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const [mostRecent, ...posts] = await getSummary();
    return {props: {mostRecent, posts}};
};

const Home: NextPage<Props, {}> = props => {
	return (
		<div className='flex flex-col min-h-screen py-4 bg-black text-white '>
			<Head>
				<title>AspieCoder.com</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='flex flex-col md:mx-20 mx-4 min-h-screen'>
				<header className='flex justify-between '>
					<div className='flex' id='logo'>
						<p>AspieCoder.com</p>
					</div>
					<div>
						<Link href='/search' passHref>
							<a className='text-xl text-bold'>Blog</a>
						</Link>
					</div>
				</header>
				<main className='flex flex-col items-center justify-center w-full flex-1 mt-2 text-white mx-30'>
					<div className='flex-1 text-center md:my-60 my-10'>
						<h1 className='md:text-9xl text-4xl md:mb-10 mb-5'>AspieCoder.com</h1>
						<h2 className='md:text-7xl text-2xl'>Welcome to the site!</h2>
					</div>
					{props.mostRecent && <MainCard content={props.mostRecent} />}
					<h2 className='md:text-5xl text-xl w-full text-center border-b md:mb-10 md:pb-5 md:mt-20 mb-5 pb-2 mt-10'>Other posts</h2>

					<div className=' my-10 grid md:grid-cols-5 grid-cols-1 w-full gap-6'>
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

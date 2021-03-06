import dayjs from 'dayjs';

type Props = {
	title: string;
	date: string;
	readingTime: string;
	author: string;
};

const Header = (props: Props) => {
	return (
		<header className=' pt-64 pb-32 bg-black w-full text-center text-white'>
			<h1 className='text-6xl font-bold text-white'>{props.title}</h1>
			<div className='flex flex-col md:flex-row items-baseline w-full content-center text-2xl justify-center mt-4'>
				<p className='text-center md:p-3 w-full md:w-auto'>{props.author}</p>
				<p className='text-center md:p-3 w-full md:w-auto'>{dayjs(props.date).format('MMM D, YYYY')}</p>
				<p className='text-center md:p-3 w-full md:w-auto'>{props.readingTime}</p>
			</div>
		</header>
	);
};

export default Header;

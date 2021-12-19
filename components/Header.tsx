import dayjs from 'dayjs';
import { ReadTimeResults } from 'reading-time';

type Props = {
	title: string;
	date: string;
	readingTime: string;
};

const Header = (props: Props) => {
	return (
		<header className=' pt-64 pb-32 bg-black w-full text-center text-white'>
			<h1 className='text-6xl font-bold text-white'>{props.title}</h1>
			<div className='flex items-baseline w-full content-center text-2xl justify-center'>
				<div className='p-3'> {dayjs(props.date).format('MMM D, YYYY')}</div>
				<div className='p-3'>{props.readingTime}</div>
			</div>
		</header>
	);
};

export default Header;

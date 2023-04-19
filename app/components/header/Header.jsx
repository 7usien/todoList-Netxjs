import Link from 'next/link';
import React from 'react';
import { FaClipboardList } from 'react-icons/fa';

export default function Header() {
	return (
		<header className='flex justify-between align-middle py-6 px-12 bg-gray-500  sticky'>
			<Link prefetch={false} className='text-white text-3xl capitalize' href='/'>
				<h1>
					<FaClipboardList className='inline-block align-middle text-2xl ' />
					toDo
				</h1>
			</Link>
			<Link
				className='bg-slate-900 w-12 h-12 text-white rounded-full text-center text-4xl shadow-2xl transition-all hover:bg-orange-500 '
				href='/add'>
				+
			</Link>
		</header>
	);
}

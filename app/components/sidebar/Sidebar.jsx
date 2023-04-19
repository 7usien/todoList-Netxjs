import Link from 'next/link';
import React from 'react';

const getData = async () => {
	try {
		const data = await fetch(
			'${process.env.NEXT_PUBLIC_API}',

			{ cache: 'no-cache' }
		);
		const res = await data.json();
		return res;
	} catch (err) {
		console.log('fetching data failed');
	}
};

const Sidebar = async () => {
	const data = await getData();

	const mycats = {};

	data.items.map((item) => {
		// every item in data
		item.tags.forEach((locTag) => {
			if (mycats[locTag]) {
				mycats[locTag] += 1;
			} else {
				mycats[locTag] = 1;
			}
		});
	});

	// gettig tags with may be two tags
	// i want to get tags and put beside then the count
	return (
		<aside className='flex flex-col w-64 bg-gray-100 text-black'>
			<ul>
				{Object.keys(mycats).map((key, idx) => (
					<li
						key={idx}
						className='border p-4 shadow-md capitalize hover:bg-gray-300 shadow-lg'>
						<Link prefetch={false} href={`/${key}`}>
							{key} ({mycats[key]})
						</Link>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default Sidebar;

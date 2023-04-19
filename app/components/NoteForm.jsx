'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter, useSearchParams } from 'next/navigation';

const NoteForm = () => {
	const params = useSearchParams();
	const pageID = params.get('id');
	const router = useRouter();

	const [note, setNote] = useState({
		title: '',
		desc: '',
		tags: [],
		done: false,
	});

	const tags = ['personal', 'work', 'shopping', 'school', 'general'];

	const getData = async (id) => {
		const data = await fetch(
			`${process.env.NEXT_PUBLIC_API}/${id}`,
			{ method: 'GET' },
			{ cache: 'no-cache' }
		);
		const response = await data.json();
		return response;
	};

	useEffect(() => {
		if (pageID) {
			getData(pageID).then((data) =>
				setNote({
					title: data.title,
					desc: data.desc,
					tags: data.tags,
					done: data.done,
				})
			);
		}
	}, [pageID]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const data = await fetch(`${process.env.NEXT_PUBLIC_API}/${pageID || ''}`, {
			method: pageID ? 'PATCH' : 'POST',

			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(note),
		});

		setNote({
			title: '',
			desc: '',
			tags: [],
			done: false,
		});

		router.push('/');
	};

	return (
		<div>
			<form onSubmit={handleSubmit} className='flex flex-col gap-4 w-full'>
				<input
					className='border p-2 rounded-none shadow-md'
					placeholder='title'
					type='text'
					value={note.title}
					name='title'
					id='title'
					onChange={(e) => {
						setNote({ ...note, title: e.target.value });
					}}
				/>
				<textarea
					className='border p-2 rounded-none shadow-md'
					value={note.desc}
					name='desc'
					placeholder='note desc'
					id='desc'
					onChange={(e) => {
						setNote({ ...note, desc: e.target.value });
					}}
				/>

				<div>
					<ul className='flex gap-2'>
						{tags.map((tag, idx) => {
							const isActive = note.tags.includes(tag);

							return (
								<li
									onClick={() => {
										if (isActive) {
											setNote({ ...note, tags: [] });
										} else {
											setNote({ ...note, tags: [...note.tags, tag] });
										}
									}}
									key={idx}
									className={`cursor-pointer border p-1 ${
										isActive ? 'bg-slate-900 text-white' : ''
									}`}>
									{tag}
								</li>
							);
						})}
					</ul>
				</div>
				<button type='submit' className='bg-slate-600 text-white py-3 w-14 border'>
					{pageID ? 'update' : 'create'}
				</button>
			</form>
		</div>
	);
};

export default NoteForm;

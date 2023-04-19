import React from 'react';
import Note from './Note';

const getNotes = async (type) => {
	const data = await fetch(
		`${process.env.NEXT_PUBLIC_API}?filter=(tags~'${type || ''}')`,
		{ cache: 'no-cache' }
	);
	const res = await data.json();
	return res;
};

const NotesContainer = async ({ type }) => {
	const data = await getNotes(type);
	return (
		<div className='grid grid-cols-4 gap-4 p-12'>
			{data.items?.map((note, idx) => (
				<Note key={idx} {...note} />
			))}
		</div>
	);
};

export default NotesContainer;

import React from 'react';
import NotesContainer from '../components/notes/NotesContainer';
import Sidebar from '../components/sidebar/Sidebar';

export default function page({ params }) {
	return (
		<div>
			<NotesContainer type={params.type} />
		</div>
	);
}

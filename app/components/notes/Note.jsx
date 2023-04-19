import React from 'react';
import Crud from '../crud/Crud';

const Note = ({ title, desc, tags, id, done }) => {
	return (
		<div className='bg-amber-200 h-66 text-black p-4 rounded-sm transition-all shadow-xl hover:bg-slate-400 hover:text-white '>
			<h2
				className={`text-lg capitalize font-bold ${
					done && 'line-through'
				} hover:text-yellow-300`}>
				{title}
			</h2>
			<p className={`my-3 ${done && 'line-through'}`}>
				{desc.replace(/(<([^>]+)>)/gi, '')}
			</p>

			<div className='flex'>
				{tags.map((tag, idx) => (
					<span
						key={idx}
						className='bg-slate-600 text-white p-1 px-2 text-sm border-s-amber-50 rounded-xl shadow-lg '>
						{tag}
					</span>
				))}
			</div>

			<Crud done={done} id={id} />
		</div>
	);
};

// minute 34

export default Note;

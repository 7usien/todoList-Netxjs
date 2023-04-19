'use client';
import { usePathname, useRouter } from 'next/navigation';
import { AiOutlineDelete, AiFillEdit } from 'react-icons/ai';

const Crud = ({ done, id }) => {
	const router = useRouter();
	const pathname = usePathname();

	const doneHandler = async () => {
		const data = await fetch(
			`${process.env.NEXT_PUBLIC_API}/${id}`,

			{
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},

				body: JSON.stringify({ done: !done }),
			}
		);
		router.push(pathname);
	};

	const deleteHandler = async (id) => {
		const data = await fetch(
			`${process.env.NEXT_PUBLIC_API}/${id}`,

			{
				method: 'DELETE',
			}
		);
		router.push(pathname);
	};

	const editHandler = async (id) => {
		router.push(`edit?id=${id}`);
	};

	return (
		<>
			<div className='flex justify-between mt-5 border-t-2 pt-1 border-teal-600'>
				<label htmlFor={`${id}`} className='cursor-pointer'>
					<input
						id={`${id}`}
						className='mr-2'
						type='checkbox'
						onChange={() => {
							doneHandler();
						}}
						checked={done}
					/>
					Done
				</label>
				<div>
					<ul className='flex gap-6 text-center'>
						<li
							className='cursor-pointer'
							onClick={() => {
								editHandler(id);
							}}>
							<AiFillEdit className='inline' />
							edit
						</li>
						<li
							onClick={() => {
								deleteHandler(id);
							}}
							className='cursor-pointer'>
							<AiOutlineDelete className='inline' />
							delete
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Crud;

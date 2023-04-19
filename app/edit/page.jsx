import NoteForm from '../components/NoteForm';

const EditPage = () => {
	return (
		<div className='p-4'>
			<h1 className='text-2xl font-bold mb-3'>edit Note :</h1>

			<NoteForm />
		</div>
	);
};

export default EditPage;

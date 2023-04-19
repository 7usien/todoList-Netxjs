import NotesContainer from './components/notes/NotesContainer';
import Sidebar from './components/sidebar/Sidebar';

export default function Home() {
	return (
		<main className='flex w-full h-full'>
			<Sidebar />
			<NotesContainer />
		</main>
	);
}

import logo from './assets/logo-nlw-expert.svg';
import { NewNoteCard } from './components/new-note-card';
import { NoteCard } from './components/note-card';
import { ChangeEvent, useState } from 'react';

// The ID is generated with randomUUID, in Math.random use cases the same ID could rarely be generated.
interface Note {
	id: string;
	date: Date;
	content: string;
}

export function App() {
	const [search, setSearch] = useState('');

	// The notes has array format!
	const [notes, setNotes] = useState<Note[]>(() => {
		const notesOnStorage = localStorage.getItem('notes');

		// Return local storage notes
		if (notesOnStorage) return JSON.parse(notesOnStorage);

		return [];
	});

	function onNoteCreated(content: string) {
		const newNote = {
			id: crypto.randomUUID(),
			date: new Date(),
			content,
		};
		const notesArray = [newNote, ...notes];
		setNotes(notesArray);

		// Save the note in local storage
		localStorage.setItem('notes', JSON.stringify(notesArray));
	}

	function handleSearch(event: ChangeEvent<HTMLInputElement>) {
		const query = event.target.value;

		setSearch(query);
	}

	const filteredNotes =
		search !== ''
			? notes.filter((note) => note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
			: notes;

	function onNoteDeleted(id: string) {
		const notesArray = notes.filter((note) => {
			return note.id !== id;
		});

		setNotes(notesArray);
		localStorage.setItem('notes', JSON.stringify(notesArray));
	}

	return (
		<div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
			{/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
			<img src={logo} alt="nlw expert" />
			<form className="w-full">
				<input
					type="text"
					placeholder="Busque em suas notas..."
					className="w-full bg-transparent text-3xl font-semibold tracking-tight
					 outline-none placeholder:text-slate-500"
					onChange={handleSearch}
				/>
			</form>
			<div className="h-px bg-slate-700" />
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
				<NewNoteCard onNoteCreated={onNoteCreated} />
				{/* two braces, one to use javascript, other is an object */}
				{/* <NoteCard note={{ date: new Date(), content: 'Hello world' }} /> */}

				{/* The ID (key) is used by React to filter which part of the HTML actually needs to be reloaded. */}
				{filteredNotes.map((note) => {
					return <NoteCard key={note.id} note={note} onNoteDeleted={onNoteDeleted} />;
				})}
			</div>
		</div>
	);
}

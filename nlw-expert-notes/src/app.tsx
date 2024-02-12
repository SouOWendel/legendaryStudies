import logo from './assets/logo-nlw-expert.svg';
import { NewNoteCard } from './components/new-note-card';
import { NoteCard } from './components/note-card';
import { useState } from 'react';

// The ID is generated with randomUUID, in Math.random use cases the same ID could rarely be generated.
interface Note {
	id: string;
	date: Date;
	content: string;
}

export function App() {
	// The notes has array format!
	const [notes, setNotes] = useState<Note[]>([]);

	function onNoteCreated(content: string) {
		const newNote = {
			id: crypto.randomUUID(),
			date: new Date(),
			content,
		};
		const notesArray = [newNote, ...notes];
		setNotes(notesArray);

		localStorage.setItem('notes', JSON.stringify(notesArray));
	}

	return (
		<div className="mx-auto max-w-6xl my-12 space-y-6">
			{/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
			<img src={logo} alt="nlw expert" />
			<form className="w-full">
				<input
					type="text"
					placeholder="Busque em suas notas..."
					className="w-full bg-transparent text-3xl font-semibold tracking-tight
					 outline-none placeholder:text-slate-500"
				/>
			</form>
			<div className="h-px bg-slate-700" />
			<div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
				<NewNoteCard onNoteCreated={onNoteCreated} />
				{/* two braces, one to use javascript, other is an object */}
				{/* <NoteCard note={{ date: new Date(), content: 'Hello world' }} /> */}

				{/* The ID (key) is used by React to filter which part of the HTML actually needs to be reloaded. */}
				{notes.map((note) => {
					return <NoteCard key={note.id} note={note} />;
				})}
			</div>
		</div>
	);
}

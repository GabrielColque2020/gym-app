export interface Routine {
	id: string;
	weightHistory: { weight: string };
	exercise: { name: string } | null;
	sets: number;
	reps: number;
	observation: string | null;
}
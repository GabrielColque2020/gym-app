interface SeedTrainer {
	name: string;
	email: string;
	password: string;
}

interface SeedClient {
	name: string;
	email: string;
	password: string;
}

interface SeedExercise {
	name: string;
	bodyPart: "CHEST" | "BACK" | "LEGS" | "TRICEPS" | "BICEPS" | "SHOULDERS";
}

interface SeedWorkoutPlan {
	name: string;
	order: number;
	clientId?: string;
}

interface SeedRoutine {
	observation: string;
	reps: number;
	sets: number;
	order: number;
	exerciseId?: string;
	workoutPlanId?: string;
}

interface SeedData {
	trainer: SeedTrainer;
	clients: SeedClient[];
	exercises: SeedExercise[];
	workoutPlans: SeedWorkoutPlan[];
	routines: SeedRoutine[];
}

export const InitialData: SeedData = {
	trainer: {
		name: "Gi Barco",
		email: "giBarco@gmail.com",
		password: "123456",
	},
	clients: [
		{
			name: "Gabriel Colque",
			email: "gabriel@gmail.com",
			password: "123456",
		},
		{
			name: "Samanta Farfan",
			email: "sam@gmail.com",
			password: "123456",
		}
	],
	exercises: [
		{
			name: "Press de banca", // Bench press
			bodyPart: "CHEST",
		},
		{
			name: "Dominadas", // Pull-ups
			bodyPart: "BACK",
		},
		{
			name: "Sentadillas", // Squats
			bodyPart: "LEGS",
		},
		{
			name: "Fondos", // Dips
			bodyPart: "TRICEPS",
		}
	],
	workoutPlans: [
		{
			name: "Dia 1: Espalda y biceps", // Day 1: Back and biceps
			order: 1,
		},
		{
			name: "Dia 2: Piernas", // Day 2: Legs
			order: 2,
		}
	],
	routines: [
		{
			observation: "Llegar al fallo", // Go to failure
			reps: 15,
			sets: 4,
			order: 1,
		},
		{
			observation: "Piramidal", // Pyramid set
			reps: 15,
			sets: 4,
			order: 2,
		}
	]
}
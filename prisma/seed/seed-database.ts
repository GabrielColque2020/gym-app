import { PrismaClient } from "@/generated/prisma";
import { InitialData } from "./seed";

const prisma = new PrismaClient();

async function deleteAll() {
	await prisma.mealPlan.deleteMany()
	await prisma.workoutPlan.deleteMany();
	await prisma.routine.deleteMany();
	await prisma.weightHistory.deleteMany();
	await prisma.exercise.deleteMany();
	await prisma.client.deleteMany();
	await prisma.trainer.deleteMany();
}

async function main(): Promise<void> {

	await deleteAll();

	const { trainer, clients, exercises, workoutPlans, routines } = InitialData;

	// Create the trainer
	const createdTrainer = await prisma.trainer.create({
		data: trainer
	})

	// Create the clients
	await prisma.client.createMany({
		data: clients.map(client => ({
			...client,
			trainerId: createdTrainer.id
		}))
	})

	// Get the first created client
	const client = await prisma.client.findFirst();

	// Create the exercises
	await prisma.exercise.createMany({ data: exercises })

	// Create the Workout Plan
	await prisma.workoutPlan.createMany({
		data: workoutPlans.map(plan => ({
			...plan,
			clientId: client?.id
		}))
	})

	// Get the first created workoutPlan
	const plan = await prisma.workoutPlan.findFirst();

	// Get the created exercises
	const exercisesDB = await prisma.exercise.findMany();

	routines[0].exerciseId = exercisesDB[0].id;
	routines[1].exerciseId = exercisesDB[1].id;

	// Create the routines
	await prisma.routine.createMany({
		data: routines.map(routine => ({
			...routine,
			workoutPlanId: plan?.id
		}))
	})

	console.log('Seed executed successfully');
}

(async () => {
	try {
		if (process.env.NODE_ENV === "production") return;
		await main();
	} catch (error) {
		console.error('Error executing seed:', error);
		process.exit(1);
	}
})();
'use server';

import prisma from "@/lib/prisma";
import { unstable_cache } from "next/cache";

export const getWorkoutPlanByClientId = async () => {
	return unstable_cache(
		async () => {
			try {

				const firstClient = await prisma.client.findFirst();

				if (!firstClient) {
					return null;
				}

				const plans = await prisma.workoutPlan.findMany( {
					select: {
						id: true,
						name: true
					},
					where: {
						clientId: firstClient?.id,
						deleted: false
					}
				} );

				if (!plans) return null;

				return {
					data: plans
				};


			} catch (error) {
				console.log( "Error in getWorkoutPlanByClientId", error )
				throw new Error( "Error al obtener la rutina por id de cliente" )
			}
		},
		[ 'workoutPlan-cache-key' ], // Clave única para este caché
		{
			revalidate: 10, // Tiempo de revalidación en segundos (opcional)
			tags: [ 'workoutPlans' ] // Tags para invalidar el caché
		}
	)();
}

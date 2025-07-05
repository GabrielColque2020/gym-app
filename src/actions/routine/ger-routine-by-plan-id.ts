'use server';

import { unstable_cache } from "next/cache";
import prisma from "@/lib/prisma";

// Constantes para la configuración del caché
const CACHE_REVALIDATION_TIME = 3600; // 1 hora

export const getRoutineByPlanId = async ( planId: string ) => {

	return unstable_cache(
		async () => {
			try {

				const routines = await prisma.routine.findMany( {
					include: {
						exercise: {
							select: {
								name: true,
							}
						},
						weightHistory: {
							select: {
								weight: true
							},
							orderBy: {
								date: 'desc'
							},
							take: 1
						}
					},
					where: {
						workoutPlanId: planId
					},
					orderBy: {
						order: 'asc'
					}
				} )

				if (!routines?.length) return [];

				const formattedRoutines = routines.map( routine => ( {
					...routine,
					weightHistory: routine.weightHistory[ 0 ]
						? routine.weightHistory[ 0 ]
						: { weight: '' }, // Devuelve null si no hay datos
				} ) );

				return formattedRoutines;

			} catch (error) {
				console.log( "Error in getRoutineByPlanId", error )
				throw new Error( "Error al obtener la rutina por id del Plan" )
			}
		},
		[ `routine-plan-${ planId }` ],
		{
			revalidate: CACHE_REVALIDATION_TIME,
			tags: [ `routine-${ planId }` ],
		}
	)();
}

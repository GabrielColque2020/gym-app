'use server';

import prisma from "@/lib/prisma";

interface Props {
	weightHistories: {
		routineId: string;
		weight: string;
	}[]
}

export const setWeightHistory = async ( { weightHistories }: Props ) => {
	try {

		const result = await prisma.weightHistory.createMany( {
			data: weightHistories
		} );

		if (result.count === 0) {
			return {
				ok: false,
				message: 'No se pudo registrar el historial de peso manejado',
			};
		}
		return {
			ok: true,
			message: 'Historial de peso manejado registrado correctamente',
		};

	} catch (error) {
		console.log( error );
		return {
			ok: false,
			message: 'Error al registrar el historial de peso manejado',
		};
	}
}
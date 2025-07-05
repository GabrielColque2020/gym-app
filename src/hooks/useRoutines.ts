import { Routine } from "@/interface";
import { useState, useCallback, useMemo } from "react";


type UseRoutinesReturn = {
	routines: Routine[];
	handleWeightChange: (newWeight: string, routineId: string) => void;
	modifiedRoutines: Routine[];
};

/**
 * Hook personalizado para manejar la lógica de las rutinas.
 *
 * @param initialRoutines Lista inicial de rutinas proporcionada desde el servidor.
 * @returns Estado actualizado, handler para cambios y lista de rutinas modificadas.
 */
export const useRoutines = (initialRoutines: Routine[]): UseRoutinesReturn => {
	// Estado para controlar las rutinas
	const [routines, setRoutines] = useState<Routine[]>(initialRoutines);

	// Maneja cambio en el peso
	const handleWeightChange = useCallback(
		(newWeight: string, routineId: string) => {
			setRoutines((prevRoutines) =>
				prevRoutines.map((routine) =>
					routine.id === routineId
						? { ...routine, weightHistory: { ...routine.weightHistory, weight: newWeight } }
						: routine
				)
			);
		},
		[]
	);

	// Rutinas modificadas (comparación memorizada)
	const modifiedRoutines = useMemo(() => {
		return routines.filter((routine, index) => {
			const originalRoutine = initialRoutines[index];
			return originalRoutine.weightHistory.weight !== routine.weightHistory.weight;
		});
	}, [routines, initialRoutines]);

	return {
		routines,
		handleWeightChange,
		modifiedRoutines
	};
};
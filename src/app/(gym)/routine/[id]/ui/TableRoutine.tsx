"use client";

import { Button, Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TextTitle } from "@/components";
import { Input } from "@headlessui/react";
import { useRoutines } from "@/hooks";
import { Routine } from "@/interface";
import { setWeightHistory } from "@/actions/weightHistory/set-weight-history";
import { useRouter } from "next/navigation";

const RoutineTitle = ( { id }: { id: string } ) => (
	<div className={ "sm:flex sm:items-center border-b border-gray-300 pb-5" }>
		<div className={ "sm:flex-auto" }>
			<TextTitle>Rutina de Ejercicios</TextTitle>
		</div>
	</div>
);

interface Props {
	routinesFromServer: Routine[];
}

export const TableRoutine = ( { routinesFromServer }: Props ) => {

	// Usa el hook para manejar estado y lógica
	const { routines, handleWeightChange, modifiedRoutines } = useRoutines( routinesFromServer );
	const router = useRouter();

	// Función para manejar el evento del botón Guardar
	const handleSave = async () => {
		if (modifiedRoutines.length > 0) {
			const weightHistories = modifiedRoutines.map( ( routine ) => ( {
				routineId: routine.id,
				weight: routine.weightHistory.weight
			} ) );

			const result = await setWeightHistory( { weightHistories } );

			console.log( result );
		}

	};

	const handleBack = () => {
		router.back();
	}

	return (
		<>
			<div className={ "overflow-hidden rounded-lg bg-white shadow-lg border border-gray-300" }>
				<div className={ "px-4 py-5 sm:p-4" }>
					<Table>
						<TableHead>
							<TableRow>
								<TableHeader className={ "!pl-4 table-cell lg:hidden" }>
									Detalle del Ejercicio
								</TableHeader>
								<TableHeader className={ "!pl-4 hidden lg:table-cell" }>Ejercicio</TableHeader>
								<TableHeader className={ "hidden lg:table-cell" }>Series y Rep.</TableHeader>
								<TableHeader className={ "hidden lg:table-cell" }>Observaciones</TableHeader>
								<TableHeader>Peso Manejado</TableHeader>
							</TableRow>
						</TableHead>

						<TableBody>
							{
								routines.map( ( item ) => (
									<TableRow key={ item.id }>
										<TableCell className={ "!pl-4 table-cell lg:hidden" }>{
											<div className={ "flex flex-col" }>
												<span>{ item.exercise?.name }</span>
												<span>{ item.sets } x { item.reps }</span>
												<span>{ item.observation }</span>
											</div>
										}</TableCell>
										<TableCell className={ "!pl-4 hidden lg:table-cell" }>{ item.exercise?.name }</TableCell>
										<TableCell className={ "hidden lg:table-cell" }>{ item.sets } x { item.reps }</TableCell>
										<TableCell className={ "hidden lg:table-cell" }>{ item.observation }</TableCell>
										<TableCell>
											<Input
												className={"border border-gray-300 rounded-lg px-4 py-1"}
												type={ "text" }
												value={ item.weightHistory.weight ?? 'Sin Datos' }
												placeholder={ "Peso Manejado" }
												onChange={ ( e ) => handleWeightChange( e.target.value, item.id ) }
											/>

										</TableCell>
									</TableRow>
								) )
							}
						</TableBody>
					</Table>
				</div>
				<div className={ "bg-gray-100 border-t border-gray-300 px-4 py-2.5 flex items-end justify-end" }>
					<button
						type={ "button" }
						className={ "rounded-lg mr-2 cursor-pointer px-3 py-2 text-sm font-semibold text-red-400" }
						onClick={ handleBack }
					>
						Atrás
					</button>

					<button
						type={ "button" }
						className={ "rounded-lg cursor-pointer bg-green-600  border border-green-700 px-3 py-2 text-sm font-semibold text-gray-50 shadow-xs hover:bg-green-700" }
						onClick={ handleSave }
					>
						Guardar
					</button>
				</div>
			</div>
		</>


	)
}

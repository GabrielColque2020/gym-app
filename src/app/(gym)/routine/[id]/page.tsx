import { ContainerCustom, LoadingComponent, TextTitle } from "@/components";
import { getRoutineByPlanId } from "@/actions";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { TableRoutine } from "@/app/(gym)/routine/[id]/ui/TableRoutine";


const RoutineTitle = ( { id }: { id: string } ) => (
	<div className={ "sm:flex sm:items-center border-b border-gray-300 pb-5" }>
		<div className={ "sm:flex-auto" }>
			<TextTitle>Rutina de Ejercicios</TextTitle>
		</div>
	</div>
);

interface Props {
	params: Promise<{
		id: string;
	}>
}

export const metadata = {
	title: 'Rutina de Ejercicio',
	description: 'Detalles de la rutina de ejercicio'
};


export default async function RoutineByIdPage( { params }: Props ) {

	const { id } = await params;
	const routinesFromServer = await getRoutineByPlanId( id )

	console.log( routinesFromServer );
	if (!routinesFromServer || routinesFromServer.length === 0) {
		notFound();
	}

	return (
		<ContainerCustom>
			<div className={ "bg-white dark:bg-gray-800 h-min pt-5 px-4 sm:px-6 lg:px-8 mt-5 rounded-lg shadow-sm pb-2" }>
				<RoutineTitle id={ id }/>

				<Suspense fallback={ <LoadingComponent/> }>
					<div className={ "my-5" }>
						<TableRoutine routinesFromServer={ routinesFromServer }/>
					</div>
				</Suspense>
			</div>
		</ContainerCustom>
	)
}
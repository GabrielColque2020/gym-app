import clsx from "clsx";
import { ContainerCustom, HeaderSection, TextLink, TextTitle } from "@/components";
import { getWorkoutPlanByClientId } from "@/actions";
import Image from "next/image";

const colors = [
	'bg-pink-600',
	'bg-purple-600',
	'bg-yellow-500',
	'bg-green-500',
	'bg-blue-500',
	'bg-orange-500',
	'bg-red-500',
]
export const metadata = {
	title: "Planes",
	description: "Planes de Ejercicios",
};

export default async function WorkoutPlanPage() {

	const response = await getWorkoutPlanByClientId();
	const plans = response?.data || [];

	return (
		<>
			<HeaderSection title={ "Planes de Trabajo" }
						   subtitle={ "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat." }/>

			<ContainerCustom>
				<div className={ "mt-10 shadow shadow-blue-100 px-4 py-4 sm:py-6 bg-white rounded-xl" }>
					<TextTitle className={ "" }>
						Mayo
					</TextTitle>
					<ul role={ "list" } className={ "mt-3 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6" }>
						{ plans?.map( ( plan, index ) => (
							<li key={ plan.id } className={ "col-span-1 flex shadow-lg lg:h-15" }>
								<div
									className={ clsx(
										colors[ index ],
										'flex w-16 shrink-0 items-center justify-center rounded-l-md text-lg sm:text-xl/8 font-medium text-white',
									) }
								>
									Día { index + 1 }
								</div>
								<TextLink href={ `/routine/${ plan.id }` }
										  className={ "flex flex-1 items-center justify-between truncate rounded-r-md border hover:border-2  border-blue-300 border-t-blue-200 border-r-2 hover:border-r-3 border-b-2 hover:border-b-3  bg-white hover:bg-blue-100" }>
									<div className={ "flex-1 truncate px-4 py-2 " }>
										{ plan.name }
									</div>
								</TextLink>
							</li>
						) ) }
					</ul>

				</div>

			</ContainerCustom>

			{/*<Image*/}
			{/*	className="object-contain w-full h-64 sm:h-full rounded-t-lg sm:rounded-none sm:rounded-s-lg"*/}
			{/*	src="/gym.jpg"*/}
			{/*	alt=""*/}
			{/*	width={100}  // Usa el ancho real de tu imagen*/}
			{/*	height={100} // Usa el alto real de tu imagen*/}
			{/*	priority*/}
			{/*/>*/}
		</>
	)
}
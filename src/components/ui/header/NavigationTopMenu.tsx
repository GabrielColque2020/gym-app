"use client";


import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Link } from "@/components/ui/catalyst/link";

const navigation = [
	{ name: 'Inicio', href: "/home", current: true },
	{ name: 'Plan de Trabajo', href: "/workoutPlan", current: false },
	{ name: 'Plan Alimenticio', href: "/footplan", current: false },
	{ name: 'Seguimiento', href: "/followup", current: false },
]

export const NavigationTopMenu = ( ) => {
	const pathname = usePathname();

	return (
		<nav className={ "hidden lg:flex" }>
			{ navigation.map( ( item ) => (
				<Link
					key={ item.name }
					href={ item.href }
					aria-current={ item.current ? 'page' : undefined }
					className={ clsx(
						'rounded-md px-3 py-2 text-sm lg:text-lg font-bold hover:bg-white/10',
						{
							'text-white': pathname.startsWith(item.href),
							'text-indigo-100': !pathname.startsWith(item.href),
						}
					) }
				>
					{ item.name }
				</Link>
			) ) }
		</nav>
	)
}
    
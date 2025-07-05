"use client";

import { usePathname } from "next/navigation";
import { CalendarIcon, FolderIcon, HomeIcon, UsersIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { Link } from "@/components/ui/catalyst/link";

const navigation = [
	{ name: 'Inicio', href: "/home", icon: HomeIcon },
	{ name: 'Plan de Trabajo', href: "/workoutPlan", icon: UsersIcon },
	{ name: 'Plan Alimenticio', href: "/footplan", icon: FolderIcon },
	{ name: 'Seguimiento', href: "/followup", icon: CalendarIcon }
]

export const NavigationSidebar = () => {
	const pathname = usePathname();

	return (
		<nav className={ "flex flex-1 flex-col" }>
			<ul role={ "list" } className={ "flex flex-1 flex-col gap-y-7" }>
				<li>
					<ul role={ "list" } className={ "-mx-2 space-y-1" }>
						{ navigation.map( ( item ) => (
							<li key={ item.name }>
								<Link
									href={ item.href }
									className={ clsx(
										'group flex gap-x-3 rounded-md p-2 text-lg font-semibold',
										{
											'bg-gray-800 text-indigo-200': pathname.startsWith(item.href),
											'text-gray-400 hover:bg-gray-800 hover:text-indigo-200': !pathname.startsWith(item.href),
										}
									) }
								>
									<item.icon aria-hidden={ "true" } className={ "size-6 shrink-0" }/>
									{ item.name }
								</Link>
							</li>
						) ) }
					</ul>
				</li>
			</ul>
		</nav>
	)
}
    
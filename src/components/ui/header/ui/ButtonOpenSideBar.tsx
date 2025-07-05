"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { useUIStore } from "@/store";

export const ButtonOpenSideBar = () => {
	const setSidebarOpen = useUIStore(state => state.setSidebarOpen );

	const handleClick = () => {
		setSidebarOpen(true);
	};


	return (
		<button type={ "button" } onClick={ handleClick } className={ "p-1 text-indigo-200 cursor-pointer hover:bg-gray-600 hover:rounded-full lg:hidden" }>
			<Bars3Icon aria-hidden={ "true" } className={ "size-7" }/>
		</button>
	)
}
